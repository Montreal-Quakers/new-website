// navigation.js
{/* 
  Table of contents

1) Variables setting up breakpoint and intersectional observer
2) Intersection Observer(for scroll effects)
  2a) Scroll to top button
2b) Sticky navbar on widescreens
3) Dropdown behaviour
4) Language switcher flip icon
5) Toggle light and dark mode
 */}

import { navigate } from 'astro:transitions/client';

// -------------------------------------------------------------
// GLOBAL EVENT LISTENERS & FUNCTIONS (Run once on site load)
// -------------------------------------------------------------

// Dark Mode Toggle
document.addEventListener('click', (e) => {
  const toggleBtn = e.target.closest('#dark-mode-toggle');
  if (!toggleBtn) return;

  const isDark = document.documentElement.classList.contains('darkmode');
  if (isDark) {
    document.documentElement.classList.replace('darkmode', 'lightmode');
    localStorage.setItem('darkMode', 'lightmode');
  } else {
    document.documentElement.classList.replace('lightmode', 'darkmode');
    localStorage.setItem('darkMode', 'enabled');
  }
});

// Navigation Click Handler (Mobile Toggle, Submenus, Click-Away)
window.addEventListener('click', (e) => {
  const navToggle = document.getElementById('nav-toggle');
  const navbar = document.querySelector('.navbar');
  const dropdown = e.target.closest('.dropdown');
  const toggleLabel = e.target.closest('.nav-toggle-label');

  if (toggleLabel || e.target === navToggle) return;

  if (navToggle && navToggle.checked && navbar && !navbar.contains(e.target)) {
    navToggle.checked = false;
    document.querySelectorAll('.dropdown.is-open').forEach(menu => {
      menu.classList.remove('is-open');
      menu.querySelector('.dropbtn')?.classList.remove('active');
    });
    return;
  }

  if (dropdown) {
    const btn = dropdown.querySelector('.dropbtn');

    if (dropdown.classList.contains('is-open') && e.target.closest('.dropbtn')) {
      dropdown.classList.remove('is-open');
      btn?.classList.remove('active');
      return;
    }

    document.querySelectorAll('.dropdown.is-open').forEach(menu => {
      if (menu !== dropdown) {
        menu.classList.remove('is-open');
        menu.querySelector('.dropbtn')?.classList.remove('active');
      }
    });

    dropdown.classList.add('is-open');
    btn?.classList.add('active');
  } else {
    document.querySelectorAll('.dropdown.is-open').forEach(menu => {
      menu.classList.remove('is-open');
      menu.querySelector('.dropbtn')?.classList.remove('active');
    });
  }
});

// Responsive Click Helper
window.responsiveClick = function (id, type) {
  const NavBar = document.getElementById("myNavbar");
  const breakpoint = NavBar?.dataset.breakpoint || "1062px";
  const dropdownID = document.getElementById("dropdown_" + id);
  if (!dropdownID) return;

  const parentLi = dropdownID.parentElement;
  const isDesktop = window.matchMedia(`(min-width: ${breakpoint})`).matches;

  if (isDesktop && type.includes('mouse')) return;

  document.querySelectorAll('.dropdown.is-open').forEach(menu => {
    if (menu !== parentLi) {
      menu.classList.remove('is-open');
      menu.querySelector('.dropbtn')?.classList.remove('active');
    }
  });

  const isOpen = parentLi.classList.toggle("is-open");
  const btn = parentLi.querySelector('.dropbtn');

  if (isOpen) btn?.classList.add("active");
  else btn?.classList.remove("active");
};

// Language Switcher Button Helper
window.flipIcon = function (e) {
  if (e) e.preventDefault();

  const twoArrowIcon = document.getElementById("twoArrowIcon");
  const translationAnchor = e?.currentTarget || document.getElementById("languageSwitcher");
  const newBaseURL = translationAnchor?.dataset.newurl || translationAnchor?.getAttribute("href");

  twoArrowIcon?.classList.add("rotate-hor-center");
  localStorage.setItem('lang', null);

  if (newBaseURL) {
    const search = window.location.search;
    const newurl = search ? `${newBaseURL}${search}` : newBaseURL;

    // Use window.location.href so Pagefind's WASM engine resets for the new language
    setTimeout(() => {
      window.location.href = newurl;
    }, 180);
  }
};

// -------------------------------------------------------------
// PAGE TRANSITION OBSERVERS (Re-run on every page load)
// -------------------------------------------------------------
document.addEventListener('astro:page-load', () => {
  // Theme state sync
  const currentTheme = localStorage.getItem('darkMode');
  if (currentTheme === 'enabled') {
    document.documentElement.classList.add('darkmode');
    document.documentElement.classList.remove('lightmode');
  } else if (currentTheme === 'lightmode') {
    document.documentElement.classList.remove('darkmode');
    document.documentElement.classList.add('lightmode');
  }

  // Elements & Observers
  const NavBar = document.getElementById("myNavbar");
  const ScrollToTopBtn = document.getElementById("topBtn");
  const IntersectionObserver1 = document.getElementById("intersectionObserver1");
  const target1 = document.getElementById("intersectionObserver2");
  const breakpoint = NavBar?.dataset.breakpoint || "1062px";
  const MediaQuery = window.matchMedia(`(min-width: ${breakpoint})`);

  if (IntersectionObserver1 && ScrollToTopBtn) {
    let observer1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ScrollToTopBtn.classList.remove("topBtn__show");
        } else {
          ScrollToTopBtn.classList.add("topBtn__show");
        }
      });
    });
    observer1.observe(IntersectionObserver1);
  }

  if (target1 && NavBar && MediaQuery.matches) {
    let observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          NavBar.classList.remove("change_nav_color");
        } else {
          NavBar.classList.add("change_nav_color");
        }
      });
    });
    observer2.observe(target1);
  }
});
