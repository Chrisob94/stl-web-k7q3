// Static Toad Labs: the only script on the site. Pages work without it.

// LAUNCH DAY: set this to Crosshue's App Store link and every "coming soon" App Store button becomes a real one:
//   const CROSSHUE_APP_STORE = "https://apps.apple.com/app/id6823928916";
const CROSSHUE_APP_STORE = "";

if (CROSSHUE_APP_STORE) {
  document.querySelectorAll("[data-appstore]").forEach((el) => {
    const a = document.createElement("a");
    a.className = "btn store";
    a.href = CROSSHUE_APP_STORE;
    a.rel = "noopener";
    a.textContent = "Download on the App Store";
    el.replaceWith(a);
  });
  document.querySelectorAll("[data-appstore-note]").forEach((el) => { el.textContent = "Free on the App Store for iPhone and iPad."; });
}

// LAUNCH DAY: the same for Box Day's buttons (data-boxday-appstore):
//   const BOXDAY_APP_STORE = "https://apps.apple.com/app/id6823255436";
const BOXDAY_APP_STORE = "";

if (BOXDAY_APP_STORE) {
  document.querySelectorAll("[data-boxday-appstore]").forEach((el) => {
    const a = document.createElement("a");
    a.className = "btn store";
    a.href = BOXDAY_APP_STORE;
    a.rel = "noopener";
    a.textContent = "Download on the App Store";
    el.replaceWith(a);
  });
  document.querySelectorAll("[data-boxday-appstore-note]").forEach((el) => { el.textContent = "Free on the App Store for iPhone, iPad and Mac."; });
}

document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });

// Close the phone menu after picking a link on the same page.
document.querySelectorAll(".menu nav a").forEach((a) => a.addEventListener("click", () => a.closest("details").removeAttribute("open")));
