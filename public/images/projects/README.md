# Adding photos to the site

**Copy image files into the folder for the project. That is the whole process.**

There is no data file to edit. `scripts/scan-images.mjs` reads these folders and
builds `src/data/project-images.json`, which the gallery renders from. The scan
runs automatically before `npm run dev` and before `npm run build`, so a fresh
photo shows up the next time either one starts. To regenerate without starting
anything, run `npm run images`.

## Folders

| Folder | Project |
| --- | --- |
| `clu-multi-agent-assistant/` | CLU: Multi-Agent AI Assistant |
| `composites-ai-assistant/` | Composites AI Assistant |
| `sales-utility-engine/` | Sales Utility Engine |
| `door-guard/` | Door Guard |
| `ai-brand-checker/` | AI Brand Consistency Checker |
| `steering-wheel/` | Composite Steering Wheel Redesign |
| `mf5-rc-car/` | MF-5 RC Vehicle |
| `dynamometer/` | Low-Cost Engine Dynamometer |
| `motion-tracking/` | Motion-Tracking Fixture |
| `linkage-larry/` | Linkage Larry: Jansen Walking Robot |

A project with no images falls back to its generated technical diagram, so it is
fine to leave a folder empty.

## Naming

Filenames become the alt text, so name them like a caption rather than
`IMG_4821.jpg`:

```
01-completed-carbon-fiber-steering-wheel.jpg
02-ansys-acp-ply-modeling.jpg
03-water-jet-cut-plate.jpg
```

- **A leading number sets the order.** Unnumbered files sort alphabetically
  after the numbered ones.
- **The first image is the cover**, used on the project card and the detail page
  header. Put the strongest photo at `01-`.
- Dashes become spaces. Known acronyms keep their casing, so `ansys-acp` renders
  as "ANSYS ACP", not "Ansys acp".

## Longer captions

For anything the filename cannot carry, add a `captions.json` beside the images:

```json
{
  "04-qualifying-results.jpg": {
    "caption": "Qualifying: first place with an 18.46-second best time."
  }
}
```

Both keys are optional: `caption` is the line printed under the image, `alt` is
the screen-reader description if it should differ.

## Format and size

- **JPG** for photos, **PNG** for diagrams and screenshots that need crisp
  edges, **WebP** if you already have it. Next.js optimizes and serves modern
  formats regardless of what you put in.
- **At least 1600px on the long edge.** The scan prints a warning for anything
  under 900px wide, because a small image stretched across a content column
  looks soft. The lightbox refuses to upscale past an image's real size, so a
  low-resolution file will display small rather than blurry.
- Anything under about 500KB per image is fine. There is no build-time
  compression step, so avoid dropping in 8MB camera originals.

Only publish photos, CAD exports, and test data you have permission to share.
