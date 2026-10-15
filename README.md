# Static Toad Labs website

Static site (HTML/CSS/JS, no build step) for GitHub Pages.

## Edit games
All game info lives in **`games.js`**. Drop media into `assets/games/<slug>/` (`ace-angles`, `box-day`, `crosshue`, `ember-roll`):
- screenshots: iPhone portrait PNG/JPG (e.g. 1179×2556), list in `screenshots: ["1.png","2.png","3.png"]`
- video: portrait 9:16 `trailer.mp4` (e.g. 1080×1920 or an iPhone screen recording) (H.264, keep <25 MB; GitHub rejects files >100 MB) + optional `poster.jpg`
- icon: `icon.png`, 1024×1024 PNG, square (the site rounds the corners iOS-style); set `icon: "icon.png"`
- `links`: website, testflight, support, privacy, x, instagram, tiktok, youtube, discord — only filled ones are shown; "Links coming soon" appears when all are empty
- `appStoreUrl`: paste the App Store link once live (badge switches from "coming soon").
Use Apple's official badge artwork from https://developer.apple.com/app-store/marketing/guidelines/ if desired.

