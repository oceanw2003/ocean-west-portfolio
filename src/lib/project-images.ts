import manifest from "@/data/project-images.json";

export type GalleryImage = {
  src: string;
  /** Videos render in a player; images render through next/image. */
  kind: "image" | "video";
  /** A file named cover.* represents the project rather than joining the walkthrough. */
  isCover: boolean;
  /** The section this figure belongs to, from its subfolder. Null at top level. */
  group: string | null;
  /** Where this figure sits in the process, e.g. "Qualification". */
  stage: string | null;
  alt: string;
  caption: string | null;
  width: number | null;
  height: number | null;
  bytes: number;
};

const imagesBySlug = manifest as Record<string, GalleryImage[]>;

/**
 * Image folders are named for the project's subject rather than its slug in a
 * few cases that predate the slugs. Rather than rename committed asset paths,
 * the exceptions are listed here.
 */
const FOLDER_OVERRIDES: Record<string, string> = {
  "mf5-rc-vehicle": "mf5-rc-car",
  "low-cost-engine-dynamometer": "dynamometer",
  "steering-wheel-redesign": "steering-wheel",
  "motion-tracking-fixture": "motion-tracking-fixture-senior-capstone-project",
  "ai-brand-consistency-checker": "ai-brand-checker",
};

export function imageFolderFor(slug: string): string {
  return FOLDER_OVERRIDES[slug] ?? slug;
}

/** The walkthrough sequence, in order, without the cover. */
export function galleryFor(slug: string): GalleryImage[] {
  return (imagesBySlug[imageFolderFor(slug)] ?? []).filter((item) => !item.isCover);
}

/**
 * The still that stands in for the project on cards and detail headers.
 * Videos are skipped: next/image cannot optimize them, and a first frame is
 * usually a title card rather than the most representative view.
 */
/**
 * A cover.* file only, with no fallback.
 *
 * Project pages use this for the full-width lead image. When a project has no
 * dedicated cover, the walkthrough's first figure leads instead, rather than
 * the page showing the same screenshot twice in a row.
 */
export function dedicatedCoverFor(slug: string): GalleryImage | null {
  const media = imagesBySlug[imageFolderFor(slug)] ?? [];
  return media.find((item) => item.isCover && item.kind === "image") ?? null;
}

/** Card thumbnails always need something, so this one does fall back. */
export function coverFor(slug: string): GalleryImage | null {
  const media = imagesBySlug[imageFolderFor(slug)] ?? [];
  const stills = media.filter((item) => item.kind === "image");
  return stills.find((item) => item.isCover) ?? stills[0] ?? null;
}

export function imageCountFor(slug: string): number {
  return galleryFor(slug).length;
}

export type GallerySection = {
  /** Null for figures sitting at the top level of a project folder. */
  title: string | null;
  images: GalleryImage[];
};

/**
 * Splits a walkthrough into its sections, preserving scan order.
 *
 * A project whose photos all sit at the top level comes back as a single
 * untitled section, so the caller has one shape to render either way.
 */
export function sectionsFor(slug: string): GallerySection[] {
  const sections: GallerySection[] = [];
  for (const image of galleryFor(slug)) {
    const last = sections[sections.length - 1];
    if (last && last.title === image.group) {
      last.images.push(image);
    } else {
      sections.push({ title: image.group, images: [image] });
    }
  }
  return sections;
}

/** Real aspect ratio, so a figure is never cropped to a fixed box. */
export function aspectRatioOf(image: GalleryImage): string {
  if (!image.width || !image.height) {
    return "16 / 10";
  }
  return `${image.width} / ${image.height}`;
}

/**
 * A rough shape classification used to decide how much room an image gets in
 * the mosaic. Portrait shots are the ones that suffer most from being forced
 * into a landscape crop, so they are the ones the layout treats differently.
 */
export function orientationOf(image: GalleryImage): "portrait" | "landscape" | "square" {
  if (image.width === null || image.height === null) {
    return "landscape";
  }
  const ratio = image.width / image.height;
  if (ratio < 0.85) return "portrait";
  if (ratio > 1.2) return "landscape";
  return "square";
}
