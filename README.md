# Ocean West Portfolio

Production-ready portfolio starter and implementation for Ocean West, built with Next.js App Router, TypeScript, Tailwind CSS, and a centralized typed content model.

## Project Overview

This site presents Ocean West as a mechanical engineering student working across:

- Composite structures
- Formula SAE engineering
- Mechanical design and analysis
- Manufacturing and tooling
- Experimental testing
- AI product development
- Engineering software workflows

The experience is built as a polished engineering portfolio rather than a resume pasted into a webpage.

## Technology Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Lucide React
- npm
- Vercel-ready deployment structure

## Local Setup

```bash
npm install
npm run dev
```

Local site:

```text
http://localhost:3000
```

## Development Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Production Build

```bash
npm run build
```

## Project Structure

```text
app/
  icon.svg
  layout.tsx
  not-found.tsx
  page.tsx
  projects/
    page.tsx
    [slug]/page.tsx
  robots.ts
  sitemap.ts
public/
  documents/
  images/
source/
  images/
src/
  components/
  data/
  lib/
ocean_west_portfolio_content.md
PROJECT_HANDOFF.md
README.md
```

## Content Updates

Primary structured content lives in:

- `src/data/portfolio.ts`

Authoritative raw source content lives in:

- `ocean_west_portfolio_content.md`

Recommended workflow:

1. Update the Markdown source if factual portfolio information changes.
2. Reflect the verified content changes in `src/data/portfolio.ts`.
3. Run `npm run lint`, `npm run typecheck`, and `npm run build`.

## Image Updates

Raw working images can be staged in:

- `source/images/projects/`
- `source/images/profile/`

Deployable website assets should go in:

- `public/images/projects/`
- `public/images/profile/`

Detailed image guidance is documented in:

- `public/images/projects/README.md`

## Resume Updates

The live resume path is:

```text
public/documents/Ocean_West_Resume.pdf
```

To replace the resume:

1. Add the new PDF to `public/documents/`.
2. Keep the filename `Ocean_West_Resume.pdf`, or update `src/data/portfolio.ts` if the filename changes.
3. Re-run the validation commands.

## Vercel Deployment

This project is prepared for standard Next.js deployment on Vercel and does not require a custom `vercel.json`.

### GitHub method

1. Push the repository to GitHub.
2. Sign in to Vercel.
3. Select `Add New Project`.
4. Import the GitHub repository.
5. Confirm Vercel detects Next.js automatically.
6. Keep the repository root as the root directory.
7. Keep the default build settings.
8. Deploy.
9. Review the generated production URL.

### CLI method

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

## Custom Domain

After the first successful deployment:

1. Open the Vercel project dashboard.
2. Go to `Settings > Domains`.
3. Add the desired custom domain.
4. Update DNS records as instructed by Vercel.
5. Confirm SSL provisioning completes successfully.

## Accessibility Notes

- Semantic sections and headings are used throughout the site.
- Keyboard focus styles are visible for links and buttons.
- Mobile navigation uses a real button and closes after selection.
- Reduced-motion users are respected through CSS.
- Phone number is intentionally not exposed publicly.

## Performance Notes

- The site is primarily server-rendered.
- Client components are limited to the mobile menu and copy-email action.
- Placeholder project visuals are local SVG-based UI, not remote media.
- No database, auth layer, analytics script, or paid service is required for basic operation.

## Recommended Repository Name

```text
ocean-west-portfolio
```
