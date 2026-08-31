# Project Handoff

## What Was Built

A production-oriented engineering portfolio for Ocean West with:

- A single-page homepage
- Dedicated projects index page
- Dynamic project detail pages
- Sticky responsive navigation
- Typed centralized portfolio content
- Resume handling through `public/documents`
- Placeholder technical visuals for projects
- SEO metadata, robots, sitemap, and favicon

## Architecture

- `app/` contains routes, metadata, icons, and static route generators.
- `src/data/portfolio.ts` stores all structured portfolio content and types.
- `src/components/` contains reusable UI sections and client-side interaction components.
- `src/lib/` contains metadata helpers and shared utility functions.
- `public/` stores deployable documents and future web-ready images.
- `source/` stores raw staging material and working image folders.

## Main Design Decisions

- Used a dark technical visual language with a restrained amber accent to reflect engineering, motorsport, and advanced manufacturing.
- Kept the homepage single-page for fast scanning and recruiter-friendly navigation.
- Added project detail routes so engineering process and constraints can be explained without overloading the homepage.
- Used local SVG-based placeholders instead of fake photographs.
- Marked design targets clearly as targets rather than presenting them as completed measured results.

## File Structure

```text
app/
public/
source/
src/
  components/
  data/
  lib/
ocean_west_portfolio_content.md
README.md
PROJECT_HANDOFF.md
```

## How Content Is Managed

- Source-of-truth narrative: `ocean_west_portfolio_content.md`
- Production content model: `src/data/portfolio.ts`

When making updates:

1. Edit the Markdown source if the factual content changes.
2. Update the typed production data in `src/data/portfolio.ts`.
3. Re-run lint, typecheck, and build checks.

## How To Add Project Images

Copy the files into `public/images/projects/<folder>/` and rebuild. Nothing else.

`scripts/scan-images.mjs` walks those folders and writes
`src/data/project-images.json`, which the gallery renders from. It runs
automatically via `predev` and `prebuild`, so images picked up on the next
`npm run dev` or `npm run build`. Run `npm run images` to regenerate on demand.

Naming rules, the `captions.json` override, and resolution guidance are in
`public/images/projects/README.md`. The short version: number the files to set
the order, name them like captions because the filename becomes the alt text,
and put the best photo first because image one is the cover.

`source/images/` remains a local staging area for raw exports and is gitignored.
Only what lands in `public/` is committed and deployed.

## How To Update Experience

1. Open `src/data/portfolio.ts`.
2. Find the `experience` array.
3. Update role names, organizations, summaries, highlights, or metrics using only verified information.
4. Run validation commands afterward.

## How To Add A New Project

1. Add a new project object to `portfolio.projects` in `src/data/portfolio.ts`.
2. Provide a unique slug.
3. Add summary, technologies, responsibilities, and any verified metrics.
4. Set `discipline` to `"ai"` or `"mechanical"`; it drives the homepage grouping and the filters on `/projects`.
5. Create `public/images/projects/<folder>/` and, if the folder name differs from the slug, add the mapping to `FOLDER_OVERRIDES` in `src/lib/project-images.ts`.
6. Add a matching placeholder visual branch in `src/components/project-visual.tsx` if the project will not have photos.

## How To Replace The Resume

1. Replace `public/documents/Ocean_West_Resume.pdf`.
2. Keep the same filename to avoid updating links.
3. If the filename changes, update `portfolio.resumePath` in `src/data/portfolio.ts`.

## How To Run Locally

```bash
npm install
npm run dev
```

## How To Test

```bash
npm run lint
npm run typecheck
npm run build
```

## How To Deploy To Vercel

### GitHub flow

1. Push the repo to GitHub.
2. Import it into Vercel.
3. Keep the root directory as the repository root.
4. Deploy with default Next.js settings.

### CLI flow

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

## Known Limitations

- The production site is live at `https://ocean-west-portfolio.vercel.app/`.
- Six of the ten projects have no photos yet and fall back to generated technical diagrams. Dropping files into their image folders is all that is needed to change that.
- Three steering-wheel figures were extracted from a document at roughly 160px wide. They display small on purpose rather than upscaled and blurry; re-export them from the original ANSYS session if the files still exist.
- Every image currently on the site is below 900px wide. `npm run images` prints a warning per file, so the list of what to re-export is the scan output.
- Linkage Larry's copy was extracted from the eight course documents in `source/documents/linkage-larry/`. Those files carry a `.doc` extension but are MHTML archives, so they parse as MIME rather than as binary Word files.

## Recommended Future Improvements

- Add real project imagery and galleries for the four lead engineering projects.
- Add Open Graph preview imagery.
- Add more project-specific diagrams or CAD exports where available.
- Add a profile image if desired.

## Before Publishing

- Verify email
- Verify LinkedIn
- Add real project images
- Add resume PDF
- Review all dates
- Review project metrics
- Test mobile navigation
- Test every link
- Run production build
- Deploy preview
- Review preview
- Deploy production
