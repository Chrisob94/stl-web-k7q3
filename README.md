# Static Toad Labs website

Static site (HTML/CSS/JS, no build step) for GitHub Pages.

## Edit games
All game info lives in **`games.js`**. Drop media into `assets/games/<slug>/` (`ace-angles`, `box-day`, `crosshue`):
- screenshots: iPhone portrait PNG/JPG (e.g. 1179×2556), list in `screenshots: ["1.png","2.png","3.png"]`
- video: portrait 9:16 `trailer.mp4` (e.g. 1080×1920 or an iPhone screen recording) (H.264, keep <25 MB; GitHub rejects files >100 MB) + optional `poster.jpg`
- icon: `icon.png`, 1024×1024 PNG, square (the site rounds the corners iOS-style); set `icon: "icon.png"`
- `links`: website, testflight, support, privacy, x, instagram, tiktok, youtube, discord — only filled ones are shown; "Links coming soon" appears when all are empty
- `appStoreUrl`: paste the App Store link once live (badge switches from "coming soon").
Use Apple's official badge artwork from https://developer.apple.com/app-store/marketing/guidelines/ if desired.

## Deploy to GitHub Pages
1. Create a repo (e.g. `statictoadlabs-site`) and push these files to `main`.
2. Repo › Settings › Pages › Source: *Deploy from a branch* › `main` / `(root)`.
3. Custom domain: the `CNAME` file already contains `statictoadlabs.com` (apex). Also enter it under Settings › Pages and verify the domain under your account Settings › Pages. `assets/email-logo.png` is used by the email signature and loads once the site is live.
4. Tick **Enforce HTTPS** once the certificate is issued (can take up to ~1 hour after DNS works).

## DNS records (at your registrar)
| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | `<your-github-username>.github.io` |

## Before going live
- Replace every `[PLACEHOLDER: …]` (grep for it) — email, legal entity/address, SDKs, dates, game taglines/descriptions/genres.
- **Privacy Policy and Terms are templates — have them reviewed** and make them match the SDKs in each game. Use `https://<domain>/privacy.html` as the Privacy Policy URL in App Store Connect.
