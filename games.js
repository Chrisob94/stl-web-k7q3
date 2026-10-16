/* ============================================================
   GAME DATA — edit this file only to update the showcase.
   Put media in assets/games/<slug>/ and list file names below.
   Leave screenshots [] / titleScreen "" to show placeholder frames.
   titleScreen is a title-screen or main-menu image in the featured phone.
   Do not point it at gameplay, or at any image that shows an old name.
   Trailer files in the folder are kept on disk and are not shown.
   hidden: true keeps the entry and its assets, and omits that game from
   the showcase, nav anchors, headings, meta description, and the privacy
   and terms name lists. Set hidden: false to show it again.
   ============================================================ */
/* Copy from each game's promo pack README and screenshots (15 Oct 2026). */
window.GAMES = [
  {
    slug: "ace-angles",
    hidden: true,
    name: "Ace Angles",
    tagline: "Sink it in one, or lose a ball.",
    description: "Ace Angles is a one-shot paper minigolf game. Line up your one shot and sink it, or lose a ball. 110 hand-cut paper holes across eleven worlds, with a new trick every ten holes: slopes, portals, magnets and a prism that splits the ball.",
    tags: ["Golf", "Puzzle", "iOS"],
    features: ["110 hand-cut paper holes across eleven worlds", "A new trick every ten holes: water, slopes, bumpers, portals, paint gates and magnets", "A prism that splits the ball in two", "Challenge mode: race the fuse across eleven challenge sets, plus a Daily hole"],
    icon: "icon.png",
    appStoreUrl: "",
    links: { website: "", testflight: "", support: "", privacy: "", x: "", instagram: "", tiktok: "", youtube: "", discord: "" },
    screenshots: ["1.jpg", "2.jpg", "3.jpg"],
    titleScreen: "ace-angles-01-home.jpg",
    accent: "#f5b324"
  },
  {
    slug: "box-day",
    hidden: true,
    name: "Box Day",
    tagline: "A new parcel every day!",
    description: "Box Day is a cosy parcel-pushing puzzle. Push, slide and tube your way through 160 solver-checked puzzles with Bram the post-mole, from the Depot to the Night Shift. No ads, no timers, unlimited undo.",
    tags: ["Puzzle", "iOS"],
    features: ["160 solver-checked puzzles, every one with three stars to earn", "Parcels ride pneumatic tubes, slide on ice and trip plates and gates", "No ads, no timers and unlimited undo", "A new Daily parcel every day, with a Daily archive"],
    icon: "icon.png",
    appStoreUrl: "",
    links: { website: "", testflight: "", support: "", privacy: "", x: "", instagram: "", tiktok: "", youtube: "", discord: "" },
    screenshots: ["1.jpg", "2.jpg", "3.jpg"],
    titleScreen: "box-day-01-title.jpg",
    accent: "#6b8e3a"
  },
  {
    slug: "crosshue",
    hidden: false,
    name: "Crosshue",
    tagline: "A crossword where the clues are colours.",
    description: "Crosshue is a colour crossword. Give every row and column one paint, and wherever two lines cross their paints mix. Match every swatch on the grid using logic alone, and match par for a Masterpiece.",
    tags: ["Puzzle", "iOS"],
    features: ["Every row and column gets one paint: mix to match every swatch", "Stamp mode, where overlapping inks mix", "Stuck? Hints explain the logic in plain words", "A new Daily every day, easy Monday to fiendish Sunday", "Patterns and labels for colour-blind players"],
    icon: "icon.png",
    appStoreUrl: "",
    links: { website: "", testflight: "", support: "", privacy: "", x: "", instagram: "", tiktok: "", youtube: "", discord: "" },
    screenshots: ["1.jpg", "2.jpg", "3.jpg"],
    titleScreen: "crosshue-01-title.jpg",
    accent: "#3ddbd0"
  }
];
