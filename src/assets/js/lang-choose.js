// src/assets/js/lang-choose.js
export function setupLangChoice() {
  // Use this for any initialization logic that needs to run 
  // every time a "page" swaps.
  console.log("Language choice system ready.");
}

window.chooseLang = function (lang, redirectUrl) {
  localStorage.setItem('lang', lang);
  if (redirectUrl) {
    window.location.assign(redirectUrl);
  }
};
