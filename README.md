# Abhay Rawat — Portfolio
'https://mr-spectr.github.io/my-portfolio/'
This repository serves Abhay Rawat’s React portfolio through GitHub Pages.

## Deployment layout

GitHub Pages serves the production bundle from the repository root (`index.html`, `assets/`, and the public files). The editable React/Vite source is in [`app/`](app/).

After updating the source, build it from `app/` and copy the contents of `app/dist/` to the repository root before pushing. The Vite base is relative so the bundle works at `https://mr-spectr.github.io/my-portfolio/`.

```powershell
cd app
pnpm install
pnpm run lint
pnpm run build
robocopy dist .. /E
```

The public resume is available at `/abhay-rawat-resume.pdf`.
