// navigation.js
{/* 
  Table of contents

1) Variables setting up breakpoint and intersectional observer
2) Intersection Observer(for scroll effects)
  2a) Scroll to top button
2b) Sticky navbar on widescreens
3) Dropdown behaviour
4) Language changer flip icon
5) Toggle light and dark mode
 */}
import { navigate } from 'astro:transitions/client';

document.addEventListener('astro:page-load', () => {
  // 1. Theme Logic
  const currentTheme = localStorage.getItem('darkMode');
  if (currentTheme === 'enabled') {
    document.documentElement.classList.add('darkmode');
    document.documentElement.classList.remove('lightmode');
  } else if (currentTheme === 'lightmode') {
    document.documentElement.classList.remove('darkmode');
    document.documentElement.classList.add('lightmode');
  }

  // 2. Elements & Breakpoints
  const NavBar = document.getElementById("myNavbar");
  const ScrollToTopBtn = document.getElementById("topBtn");
  const IntersectionObserver1 = document.getElementById("intersectionObserver1");
  const target1 = document.getElementById("intersectionObserver2");
  const darkModeToggle = document.querySelector('#dark-mode-toggle');
  const breakpoint = NavBar?.dataset.breakpoint || "1062px";
  const MediaQuery = window.matchMedia(`(min-width: ${breakpoint})`);

  // 3. Intersection Observers
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

  // 4. Navigation Listener (Mobile, Submenus, and Global Click-Away)
  window.addEventListener('click', (e) => {
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.querySelector('.navbar');
    const dropdown = e.target.closest('.dropdown');
    const toggleLabel = e.target.closest('.nav-toggle-label');

    // 1. MOBILE MENU TOGGLE
    // If you click the hamburger/X, just let the checkbox do its thing.
    if (toggleLabel) return;

    // 2. GLOBAL CLICK-AWAY
    // If menu is open and you click outside the navbar, shut it all down.
    if (navToggle && navToggle.checked && navbar && !navbar.contains(e.target)) {
      navToggle.checked = false;
      document.querySelectorAll('.dropdown.is-open').forEach(menu => {
        menu.classList.remove('is-open');
        menu.querySelector('.dropbtn')?.classList.remove('active');
      });
      return;
    }

    // 3. SUBMENU TOGGLE
    if (dropdown) {
      const btn = dropdown.querySelector('.dropbtn');

      // If tapping a submenu that is already open, close it.
      if (dropdown.classList.contains('is-open') && e.target.closest('.dropbtn')) {
        dropdown.classList.remove('is-open');
        btn?.classList.remove('active');
        return;
      }

      // Mutual Exclusivity: Close others
      document.querySelectorAll('.dropdown.is-open').forEach(menu => {
        if (menu !== dropdown) {
          menu.classList.remove('is-open');
          menu.querySelector('.dropbtn')?.classList.remove('active');
        }
      });

      // Open current
      dropdown.classList.add('is-open');
      btn?.classList.add('active');
    } else {
      // Close submenus if clicking links/empty space inside navbar
      document.querySelectorAll('.dropdown.is-open').forEach(menu => {
        menu.classList.remove('is-open');
        menu.querySelector('.dropbtn')?.classList.remove('active');
      });
    }
  });

  // 5. Dark Mode Toggle
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('darkmode');
      if (isDark) {
        document.documentElement.classList.replace('darkmode', 'lightmode');
        localStorage.setItem('darkMode', 'lightmode');
      } else {
        document.documentElement.classList.replace('lightmode', 'darkmode');
        localStorage.setItem('darkMode', 'enabled');
      }
    });
  }

  // 6. Responsive Click Function (Attached to Window)
  window.responsiveClick = function (id, type) {
    const dropdownID = document.getElementById("dropdown_" + id);
    if (!dropdownID) return;
    const parentLi = dropdownID.parentElement;
    const isDesktop = window.matchMedia(`(min-width: ${breakpoint})`).matches;

    if (isDesktop && type.includes('mouse')) return;

    // Mutual Exclusivity
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

  // 7. Language Flip Function (Attached to Window)
  window.flipIcon = function () {
    const twoArrowIcon = document.getElementById("twoArrowIcon");
    const translationAnchor = document.getElementById("languageChanger");
    const newBaseURL = translationAnchor.dataset.newurl;

    twoArrowIcon?.classList.add("rotate-hor-center");
    localStorage.setItem('lang', null);

    if (translationAnchor.classList.contains("searchy")) {
      const currentURL = new URL(window.location.href);
      const searchParameter = currentURL.searchParams.get("q") || '';
      const newurl = newBaseURL + "?q=" + searchParameter;
      setTimeout(() => navigate(newurl), 255);
      return;
    }

    setTimeout(() => navigate(newBaseURL), 255);
  };
});
