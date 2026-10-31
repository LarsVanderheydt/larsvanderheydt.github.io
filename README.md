# larsvanderheydt.github.io

Personal CV site. React + TypeScript + Vite, deployed to GitHub Pages from `main`.

## Commands

```bash
pnpm install
pnpm dev              # http://localhost:5173
pnpm check            # typescript, lint, format, unit + Storybook tests — what CI runs
pnpm format           # fix formatting
pnpm storybook        # component workbench on :6006
```

## Adding an entry

All copy lives in one file per language, [`src/content/en.ts`](src/content/en.ts) and [`src/content/nl.ts`](src/content/nl.ts), both typed by `Cv` in [`src/content/cv.ts`](src/content/cv.ts). Add every entry to both: `src/content/cv.test.ts` fails when the two drift apart.

- New piece of work: add an object to `work` (`title`, `period`, `summary`, `details`, `tags`). Order is display order.
- New role: add to the top of `roles`. Leave `details` empty for a role that should not expand.
- Periods are `YYYY`, `YYYY–YYYY` or `YYYY–now` (`YYYY–nu` in Dutch); `src/content/cv.test.ts` enforces this and unique titles.

The site is public: no colleague names, internal links or customer data.

## Structure

```
src/
  content/   cv.ts (types), en.ts and nl.ts: every word on the page
  i18n/      language resolution (pure, tested), the useLang hook and the CvContext the sections read
  theme/     light/dark resolution (pure, tested) and the useTheme hook
  shaders/   WebGL/WebGPU effects, lazy-loaded; telemetry off, still under reduced motion
  styles/    tokens (per theme) and base styles
  ui/<Name>/ one component per folder: .tsx, .css, .stories.tsx (play function = test)
```

Theme follows the system setting until the visitor uses the toggle; the choice is kept in `localStorage`. Language works the same way: Dutch for a Dutch browser locale, English otherwise, until the visitor picks one.
