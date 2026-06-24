# FamJam Essentials — Static Site (React + Vite)

Standard React + Vite + TypeScript single-page app. No SSR, no server runtime.

## Develop
    npm install
    npm run dev

## Build
    npm install
    npm run build

Output is a static `dist/` folder, deployable to any static host.

## Deploy
- **Netlify**: drag `dist/` in, or connect repo (build `npm run build`, publish `dist`). SPA fallback via `public/_redirects`.
- **Vercel**: import repo (framework: Vite). SPA fallback via `vercel.json`.
- **Hostinger / cPanel / Apache**: upload contents of `dist/` to `public_html`. SPA fallback via `.htaccess` (included in build output).
- **GitHub Pages**: push `dist/` to the `gh-pages` branch (use a SPA 404 fallback or hash routing if serving from a subpath).
- **Any static host**: serve `dist/` and route all paths to `index.html`.
