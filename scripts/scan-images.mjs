/**
 * Builds the project image manifest from whatever is sitting in
 * public/images/projects/<slug>/.
 *
 * The point of this script is that adding photos to the site should be a file
 * copy and nothing else. No editing TypeScript, no hand-written alt text, no
 * remembering a naming scheme. Drop images in the folder, run the build, done.
 *
 * Conventions (all optional):
 *   01-name.jpg   A leading number controls order. Without one, files sort
 *                 alphabetically after the numbered ones.
 *   name.jpg      The filename becomes the caption and alt text, with dashes
 *                 and underscores turned into spaces.
 *   cover.jpg     Represents the project on cards and page headers. Kept out
 *                 of the numbered walkthrough below.
 *   <subfolder>/  Becomes a titled section, numbered from one within itself.
 *                 The folder name becomes the heading, so
 *                 "android-head-unit/" reads as "Android head unit". A
 *                 leading number on the folder orders the sections.
 *   captions.json Overrides per file, e.g.
 *                 { "01-name.jpg": { "caption": "...", "stage": "..." } }
 *                 where "stage" names the point in the process the figure
 *                 belongs to.
 *
 * Intrinsic dimensions are parsed straight out of the file headers so the
 * gallery can reserve the right space before the image loads. Done by hand
 * rather than with a dependency because it is about forty lines for the three
 * formats that actually appear here.
 */

import { readdirSync, readFileSync, statSync, writeFileSync, existsSync } from "node:fs";
import { join, extname, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PROJECTS_DIR = join(ROOT, "public", "images", "projects");
const OUTPUT = join(ROOT, "src", "data", "project-images.json");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

/** Only formats browsers actually play. .mov is deliberately excluded. */
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm"]);

/** Flagged so an unplayable file is caught here rather than on the live site. */
const UNPLAYABLE_VIDEO_EXTENSIONS = new Set([".mov", ".avi", ".mkv", ".wmv", ".m4v", ".flv"]);

const MEDIA_EXTENSIONS = new Set([...IMAGE_EXTENSIONS, ...VIDEO_EXTENSIONS]);

/** Below this the image cannot fill a content column without visible softness. */
const LOW_RESOLUTION_WIDTH = 900;

/** Past this a video is slow to start and heavy in the repository. */
const LARGE_VIDEO_BYTES = 25 * 1024 * 1024;

/** Words that should keep their casing when a filename becomes a caption. */
const ACRONYMS = new Map(
  [
    "ANSYS", "ACP", "CAD", "CFD", "FEA", "CNC", "UT", "UTSA", "FSAE", "SAE",
    "RC", "3D", "AI", "LLM", "RAG", "API", "CLI", "GPU", "CPU", "UI", "PLA",
    "ABS", "PETG", "MTS", "RPM", "GD&T", "HUD", "MF-5", "CLU", "SUE", "YOLO",
    "RTSP", "OpenCV", "FastAPI", "SQLite", "ChromaDB", "Ollama", "GPT",
  ].map((word) => [word.toLowerCase(), word]),
);

function readUInt32BE(buffer, offset) {
  return buffer.readUInt32BE(offset);
}

/** Returns { width, height } or null when the format is not one we parse. */
function readDimensions(filePath) {
  let buffer;
  try {
    buffer = readFileSync(filePath);
  } catch {
    return null;
  }

  // PNG: IHDR is always the first chunk, width/height at a fixed offset.
  if (buffer.length > 24 && buffer.toString("hex", 0, 8) === "89504e470d0a1a0a") {
    return { width: readUInt32BE(buffer, 16), height: readUInt32BE(buffer, 20) };
  }

  // GIF: little-endian width/height in the logical screen descriptor.
  if (buffer.length > 10 && buffer.toString("ascii", 0, 3) === "GIF") {
    return { width: buffer.readUInt16LE(6), height: buffer.readUInt16LE(8) };
  }

  // WebP: VP8 / VP8L / VP8X each store the size differently.
  if (
    buffer.length > 30 &&
    buffer.toString("ascii", 0, 4) === "RIFF" &&
    buffer.toString("ascii", 8, 12) === "WEBP"
  ) {
    const format = buffer.toString("ascii", 12, 16);
    if (format === "VP8 ") {
      return { width: buffer.readUInt16LE(26) & 0x3fff, height: buffer.readUInt16LE(28) & 0x3fff };
    }
    if (format === "VP8L") {
      const bits = buffer.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (format === "VP8X") {
      const width = 1 + (buffer[24] | (buffer[25] << 8) | (buffer[26] << 16));
      const height = 1 + (buffer[27] | (buffer[28] << 8) | (buffer[29] << 16));
      return { width, height };
    }
    return null;
  }

  // JPEG: walk the segment markers until a start-of-frame carries the size.
  if (buffer.length > 4 && buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset < buffer.length - 9) {
      if (buffer[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      const marker = buffer[offset + 1];
      // SOF0-SOF15, skipping the non-frame markers interleaved in that range.
      const isStartOfFrame =
        marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
      if (isStartOfFrame) {
        return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
      }
      offset += 2 + buffer.readUInt16BE(offset + 2);
    }
  }

  return null;
}

/**
 * Pulls display dimensions out of an MP4 track header.
 *
 * Walks the box tree to moov > trak > tkhd, where width and height sit as
 * 16.16 fixed-point values. Done by hand for the same reason as the image
 * parsers: it avoids a dependency, and ffmpeg is not available here.
 */
function readMp4Dimensions(buffer) {
  const findBox = (start, end, type) => {
    let offset = start;
    while (offset + 8 <= end) {
      const size = buffer.readUInt32BE(offset);
      const boxType = buffer.toString("ascii", offset + 4, offset + 8);
      if (size < 8) return null;
      if (boxType === type) return { start: offset + 8, end: offset + size };
      offset += size;
    }
    return null;
  };

  const moov = findBox(0, buffer.length, "moov");
  if (!moov) return null;

  // Several tracks may exist (video, audio); the first with a real size wins.
  let cursor = moov.start;
  while (cursor + 8 <= moov.end) {
    const size = buffer.readUInt32BE(cursor);
    if (size < 8) break;
    if (buffer.toString("ascii", cursor + 4, cursor + 8) === "trak") {
      const tkhd = findBox(cursor + 8, cursor + size, "tkhd");
      if (tkhd) {
        const version = buffer[tkhd.start];
        // Version 1 widens the timestamp fields by 12 bytes overall.
        const offset = tkhd.start + (version === 1 ? 88 : 76);
        if (offset + 8 <= buffer.length) {
          const width = buffer.readUInt32BE(offset) / 65536;
          const height = buffer.readUInt32BE(offset + 4) / 65536;
          if (width > 0 && height > 0) {
            return { width: Math.round(width), height: Math.round(height) };
          }
        }
      }
    }
    cursor += size;
  }
  return null;
}

/**
 * Names that contain their own separator, so they have to be restored after
 * dashes are turned into spaces rather than looked up word by word.
 */
const PHRASES = [
  [/\bmf 5\b/gi, "MF-5"],
  [/\bgd t\b/gi, "GD&T"],
  [/\bti 6al 4v\b/gi, "Ti-6Al-4V"],
  [/\bthree point bend\b/gi, "three-point bend"],
  [/\bwater jet\b/gi, "water-jet"],
  [/\bcarbon fiber\b/gi, "carbon-fiber"],
];

/** "03-z-deformation-from-bend-test.jpg" -> "Z deformation from bend test" */
function humanize(fileName) {
  const withoutExtension = basename(fileName, extname(fileName));
  const withoutOrderPrefix = withoutExtension.replace(/^\d+[-_.\s]+/, "");

  let spaced = withoutOrderPrefix.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
  for (const [pattern, replacement] of PHRASES) {
    spaced = spaced.replace(pattern, replacement);
  }

  const words = spaced
    .split(" ")
    .filter(Boolean)
    .map((word) => ACRONYMS.get(word.toLowerCase()) ?? word);

  if (words.length === 0) {
    return withoutExtension;
  }

  const [first, ...rest] = words;
  const leading = ACRONYMS.has(first.toLowerCase())
    ? first
    : first.charAt(0).toUpperCase() + first.slice(1);

  return [leading, ...rest].join(" ");
}

/** Numbered files first in numeric order, then everything else alphabetically. */
function compareFileNames(a, b) {
  const orderA = /^(\d+)/.exec(a);
  const orderB = /^(\d+)/.exec(b);
  if (orderA && orderB) {
    const difference = Number(orderA[1]) - Number(orderB[1]);
    return difference !== 0 ? difference : a.localeCompare(b);
  }
  if (orderA) return -1;
  if (orderB) return 1;
  return a.localeCompare(b);
}

function readOverrides(folderPath) {
  const overridesPath = join(folderPath, "captions.json");
  if (!existsSync(overridesPath)) {
    return {};
  }
  try {
    return JSON.parse(readFileSync(overridesPath, "utf8"));
  } catch (error) {
    console.warn(`  ! ignoring malformed captions.json: ${error.message}`);
    return {};
  }
}

/**
 * Reads the media sitting directly in one directory.
 *
 * `group` is the section this directory represents, or null for files at the
 * top level of a project.
 */
function scanDirectory(folderPath, urlPrefix, group) {
  const overrides = readOverrides(folderPath);

  const fileNames = readdirSync(folderPath)
    .filter((name) => MEDIA_EXTENSIONS.has(extname(name).toLowerCase()))
    .sort(compareFileNames);

  return fileNames.map((fileName) => {
    const override = overrides[fileName] ?? {};
    const label = humanize(fileName);
    const filePath = join(folderPath, fileName);
    const isVideo = VIDEO_EXTENSIONS.has(extname(fileName).toLowerCase());

    let dimensions = null;
    if (isVideo) {
      try {
        dimensions = readMp4Dimensions(readFileSync(filePath));
      } catch {
        dimensions = null;
      }
    } else {
      dimensions = readDimensions(filePath);
    }

    return {
      src: `${urlPrefix}/${encodeURIComponent(fileName)}`,
      group,
      kind: isVideo ? "video" : "image",
      // A file literally named cover.* represents the project on cards and
      // page headers, and is kept out of the walkthrough sequence.
      isCover: basename(fileName, extname(fileName)).toLowerCase() === "cover",
      alt: override.alt ?? override.caption ?? label,
      // Where this step sits in the process, shown beside the figure number.
      stage: override.stage ?? null,
      // A caption is only rendered when it says something the alt text does
      // not, so an unlabelled drop-in file stays quiet rather than repeating
      // its own filename underneath itself.
      caption: override.caption ?? null,
      width: dimensions?.width ?? null,
      height: dimensions?.height ?? null,
      bytes: statSync(filePath).size,
    };
  });
}

/**
 * A project's media, with subdirectories becoming sections.
 *
 * Photographs tend to arrive grouped by build rather than by project: a car
 * has several separate modifications, a season of Formula SAE has several
 * parts. Letting a subfolder name become a section heading means that
 * structure arrives with the files, instead of having to be described
 * afterwards in a data file.
 */
function scanProject(slug) {
  const root = join(PROJECTS_DIR, slug);
  const urlRoot = `/images/projects/${encodeURIComponent(slug)}`;

  // Loose files first, then each subfolder in turn.
  const items = scanDirectory(root, urlRoot, null);

  const groupDirs = readdirSync(root)
    .filter((name) => statSync(join(root, name)).isDirectory())
    .sort(compareFileNames);

  for (const dirName of groupDirs) {
    const label = humanize(dirName);
    items.push(...scanDirectory(join(root, dirName), `${urlRoot}/${encodeURIComponent(dirName)}`, label));
  }

  return items;
}

function main() {
  if (!existsSync(PROJECTS_DIR)) {
    console.error(`No image directory at ${PROJECTS_DIR}`);
    writeFileSync(OUTPUT, "{}\n");
    return;
  }

  const manifest = {};
  let total = 0;

  const slugs = readdirSync(PROJECTS_DIR)
    .filter((name) => statSync(join(PROJECTS_DIR, name)).isDirectory())
    .sort();

  for (const slug of slugs) {
    const images = scanProject(slug);
    if (images.length === 0) {
      continue;
    }
    manifest[slug] = images;
    total += images.length;
    const missingSizes = images.filter((image) => image.width === null).length;
    console.log(
      `  ${slug}: ${images.length} image${images.length === 1 ? "" : "s"}` +
        (missingSizes > 0 ? ` (${missingSizes} without readable dimensions)` : ""),
    );

    // Worth saying out loud: a 160px screenshot pulled out of a slide deck
    // looks fine in the manifest and terrible on a full-width page.
    for (const image of images) {
      const name = basename(image.src);
      if (image.kind === "image" && image.width !== null && image.width < LOW_RESOLUTION_WIDTH) {
        console.warn(
          `    ! low resolution (${image.width}x${image.height}): ${name}` +
            " - re-export larger if you have the original",
        );
      }
      if (image.kind === "video" && image.bytes > LARGE_VIDEO_BYTES) {
        console.warn(
          `    ! large video (${(image.bytes / 1024 / 1024).toFixed(1)}MB): ${name}` +
            " - compress it, or the page will be slow to start",
        );
      }
      if (image.kind === "video" && image.width === null) {
        console.warn(`    ! could not read dimensions: ${name}`);
      }
    }
  }

  // Caught here rather than as a silently blank player on the live site.
  for (const slug of slugs) {
    const stray = readdirSync(join(PROJECTS_DIR, slug)).filter((name) =>
      UNPLAYABLE_VIDEO_EXTENSIONS.has(extname(name).toLowerCase()),
    );
    for (const name of stray) {
      console.warn(
        `  ! ${slug}/${name} is a format browsers will not play` +
          " - convert it to .mp4 (H.264) or .webm",
      );
    }
  }

  writeFileSync(OUTPUT, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(
    `Image manifest written: ${total} images across ${Object.keys(manifest).length} projects.`,
  );
}

main();
