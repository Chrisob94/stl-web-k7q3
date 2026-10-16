# Static Toad Labs website

Static site (HTML/CSS/JS, no build step) for GitHub Pages.

## Edit games
All game info lives in **`games.js`**. Drop media into `assets/games/<slug>/` (`ace-angles`, `box-day`, `crosshue`):
- screenshots: iPhone portrait PNG/JPG (e.g. 1179×2556), list in `screenshots: ["1.png","2.png","3.png"]`
- title screen: portrait title-screen or main-menu image in the featured phone. Set `titleScreen` to that filename. Leave `titleScreen: ""` for a placeholder. Do not use gameplay, or any image that shows an old game name.
- trailer files in the game folder are not shown (leave them in place; the site does not reference them)
- icon: `icon.png`, 1024×1024 PNG, square (the site rounds the corners iOS-style); set `icon: "icon.png"`
- `links`: website, testflight, support, privacy, x, instagram, tiktok, youtube, discord — only filled ones are shown; "Links coming soon" appears when all are empty
- `appStoreUrl`: paste the App Store link once live (badge switches from "coming soon").
Use Apple's official badge artwork from https://developer.apple.com/app-store/marketing/guidelines/ if desired.

