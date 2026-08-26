# Public Project Images

Place final web-ready images here when you are ready to show them on the site.

## Recommended format

- Use `.webp` first when possible
- Use `.png` for diagrams that need crisp transparency
- Use `.jpg` only when photo compression is more important than transparency

## Recommended sizes

- Featured project card: `1600 x 1000`
- Project gallery image: `1800 x 1200`
- Detail page full-width figure: `1920 x 1080`

## Expected folders

- `steering-wheel/`
- `mf5-rc-car/`
- `dynamometer/`
- `motion-tracking/`
- `ai-brand-checker/`
- `rag-system/`

## Suggested filenames

- `cover.webp`
- `detail-01.webp`
- `detail-02.webp`
- `test-setup.webp`
- `manufacturing.webp`

## Connecting images to the site

After adding optimized images, add their public paths and accurate alt text to the
matching project object's `images` array in `src/data/portfolio.ts`. Mark one image
with `featured: true`; it will replace the technical diagram on the project card and
detail page. Additional images appear in the project's visual documentation gallery.

Only use photos, CAD exports, test evidence, or diagrams you have permission to publish.
