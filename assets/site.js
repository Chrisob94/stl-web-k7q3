// Static Toad Labs: the only script on the site. Pages work without it.
// Crosshue pre-order links are in the HTML: https://apps.apple.com/app/id6823928916
// On 9 November 2026, change those labels from "Pre-order on the App Store" to "Download on the App Store".

document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });

// Close the phone menu after picking a link on the same page.
document.querySelectorAll(".menu nav a").forEach((a) => a.addEventListener("click", () => a.closest("details").removeAttribute("open")));
