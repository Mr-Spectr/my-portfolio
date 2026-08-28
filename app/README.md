# Portfolio source

This directory contains the editable React/Vite source for Abhay Rawat’s portfolio.

Run the site locally:

```powershell
npm ci
npm run dev
```

Before publishing, run `npm run lint` and `npm run build`, then copy `dist/` to the repository root. The root is intentionally a static production bundle because GitHub Pages cannot compile JSX or Vite source files at request time.
