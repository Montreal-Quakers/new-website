// src/consts.ts

// 1. Core Site Info
export const SITE_URL = import.meta.env.DEV
  ? 'localhost:4321'
  : 'montreal.quaker.ca';
export const FB_LINK = "https://www.facebook.com/MontrealQuakers/";

export const SITE_META = {
  en: {
    title: "Montreal Quaker Meeting",
    shortTitle: "Montreal Quakers",
    address: "1090 Greene Ave., Westmount",
    phone: "(514) 307-0820",
  },
  fr: {
    title: "Assemblée Quaker de Montréal",
    shortTitle: "Quakers de Montréal",
    address: "1090 ave. Greene, Westmount",
    phone: "(514) 307-0820",
  },
  keywords: "quaker, montreal, quebec, friends, religious, society, religion, meditation",
};

// 2. Breakpoints (used for CSS-in-JS or just reference)
export const BREAKPOINTS = {
  desktop: "1062px",
  mobile: "800px",
};

// 3. Page-Specific Media Configuration
export const MEDIA_PAGES = [
  { tid: "home", media: "youtube/YouTubeEmbed.astro" },
  { tid: "greene-centre", media: "maps/StreetGreeneCentre.astro" },
  { tid: "midweek", media: "maps/StreetMorsl.astro" },
  { tid: "quebec", media: "maps/StreetVieuxQC.astro" },
  { tid: "calendar", media: "calendar.astro", media2: "calendar2.astro" },
  { tid: "south_shore", media: "maps/StreetBarnabas.astro" },
];

// 4. Alert Systems
export const ALERTS = {
  red: {
    status: "some", // Options: "all", "some", "off"
    all_en: "en-newsite",
    all_fr: "fr-newsite",
    pages: [
      /* XMAS 
      { tid: "home", en: "en-xmas-closing-greene", fr: "fr-xmas-closing-greene" },
      { tid: "greene-centre", en: "en-xmas-closing-greene", fr: "fr-xmas-closing-greene" },
      */

      /* EASTER
      { tid: "home", en: "en-easter-closing-greene", fr: "fr-easter-closing-greene" },
      { tid: "greene-centre", en: "en-easter-closing-greene", fr: "fr-easter-closing-greene" },
      */

      /* EXCEPTIONAL
      { tid: "home", en: "en-exceptional-zoom", fr: "fr-exceptional-zoom" },
      { tid: "greene-centre", en: "en-exceptional-zoom", fr: "fr-exceptional-zoom" },
      */

      { tid: "laurentians", en: "en-laurentians-closing", fr: "fr-laurentians-closing" },

      /* OTHER
      { tid: "book_bible", en: "en-bookbible-update", fr: "fr-bookbible-update" },
      { tid: "quebec", en: "en-qc-close", fr: "fr-qc-close" },
      { tid: "midweek", en: "en-midweek-change", fr: "fr-midweek-change" },
      */
    ]
  },
  blue: {
    status: "some",
    all_en: "en-covid",
    all_fr: "fr-covid",
    pages: [
      /*
      { tid: "greene-centre", en: "en-construction-work-greene", fr: "fr-construction-work-greene" },
      { tid: "home", en: "en-qc-close", fr: "fr-qc-close" },
      */
      { tid: "about", en: "winter-notice-en", fr: "avis-hiver-fr" }
    ]
  }
};

// 5. Animations (The "Birds")
export const BIRD_ANIMATIONS = {
  left: {
    land_left_flip: ["midweek", "greene-centre", "quebec", "laurentians", "south_shore"],
    roll_bird1: ["links_history"],
    "swing-in1": ["home"]
  },
  right: {
    land_right: ["greene-centre", "midweek", "quebec", "laurentians", "south_shore"],
    roll_bird2: ["links_history"],
    "swing-in1": ["home"]
  },
  header: {
    "flicker-glow": ["contribution"],
    "focustext": ["home"]
  }
};
