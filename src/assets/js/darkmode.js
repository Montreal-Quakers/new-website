// src/assets/js/darkmode.js
// Toggle light and dark mode
// This runs in the head to make sure the proper darkmode is applied.
// The rest of the logic lives in navigation.js

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  // 1. Add the class to the html
  document.documentElement.classList.add('darkmode');
  document.documentElement.classList.remove('lightmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the html
  document.documentElement.classList.remove('darkmode');
  document.documentElement.classList.add('lightmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'lightmode');
}

document.addEventListener('astro:before-swap', (ev) => {
  const isDark = document.documentElement.classList.contains('darkmode');
  if (isDark) {
    ev.newDocument.documentElement.classList.add('darkmode');
    ev.newDocument.documentElement.classList.remove('lightmode');
  } else {
    ev.newDocument.documentElement.classList.add('lightmode');
    ev.newDocument.documentElement.classList.remove('darkmode');
  }
});

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}
if (darkMode === 'lightmode') {
  disableDarkMode();
}
