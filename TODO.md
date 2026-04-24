# Vercel Deployment Readiness - TODO

## Plan

- [x] 1. **Fix `index.html`** — Already had correct favicon `/logo.png` and title
- [x] 2. **Fix public assets** — Copied `src/assets/icon.jpg` → `public/icon.jpg` and `src/assets/logo.png` → `public/logo.png`
- [x] 3. **Fix `vercel.json`** — Replaced SPA rewrite with `{}` to let TanStack Start Vercel preset handle routing
- [x] 4. **Fix `package.json`** — Removed unused `@cloudflare/vite-plugin` dependency
- [x] 5. **Fix `.gitignore`** — Added `.vercel` to ignore list
- [x] 6. **Update `README.md`** — Added "Deploy to Vercel" section
- [x] 7. **Verify build** — Build succeeds with `dist/client/assets/` and `dist/server/` generated correctly
