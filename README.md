# ChengyuDrop — Legal site (Privacy + Terms)

A small React (Vite) site that hosts ChengyuDrop's **Privacy Policy** and
**Terms of Use** on one domain:

| Page            | URL (on Vercel) | Source file             |
| --------------- | --------------- | ----------------------- |
| Privacy Policy  | `/`             | `src/privacy-policy.md` |
| Terms of Use    | `/terms`        | `src/terms.md`          |

Both pages share one layout (`src/Doc.jsx`). Each is rendered from its own
markdown file — edit the markdown, and the page updates. The "Effective date"
in each header is pulled automatically from the `**Effective date:**` line.

> ⚠️ The Terms of Use is a **starter template**, not legal advice. Review it
> — especially the subscription, governing-law, and Apple App Store sections —
> and adjust before publishing.

## Run locally

```bash
npm install
npm run dev
```

- Privacy: http://localhost:5173/
- Terms:   http://localhost:5173/terms.html  ← note the `.html` in dev only

(Clean URLs like `/terms` are applied by Vercel in production via `vercel.json`.
The in-page footer link points at `/terms`, which works on the deployed site.)

## Deploy to Vercel via GitHub

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "ChengyuDrop legal site"
   git branch -M main
   git remote add origin https://github.com/<you>/chengyudrop-legal.git
   git push -u origin main
   ```
2. https://vercel.com → **Add New → Project** → import the repo.
3. Vercel auto-detects Vite. Keep defaults (build `npm run build`, output `dist`).
4. **Deploy.** You'll get a URL like `chengyudrop-legal.vercel.app`.

In App Store Connect:
- **Privacy Policy URL** → `https://<your-domain>/`
- **Terms of Use (EULA) URL** → `https://<your-domain>/terms`

Every future `git push` to `main` redeploys automatically.

## Custom domain (optional)

Vercel → **Project → Settings → Domains** → add e.g. `chengyudrop.com` and follow
the DNS steps. Your pages become `chengyudrop.com/` and `chengyudrop.com/terms`.
