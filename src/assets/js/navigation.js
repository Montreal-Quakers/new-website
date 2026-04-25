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
  // 1. Refresh variables every time the page changes
  const currentTheme = localStorage.getItem('darkMode');
  if (currentTheme === 'enabled') {
    document.documentElement.classList.add('darkmode');
    document.documentElement.classList.remove('lightmode');
  } else if (currentTheme === 'lightmode') {
    document.documentElement.classList.remove('darkmode');
    document.documentElement.classList.add('lightmode');
  }
  const NavBar = document.getElementById("myNavbar");
  const ScrollToTopBtn = document.getElementById("topBtn");
  const IntersectionObserver1 = document.getElementById("intersectionObserver1");
  const target1 = document.getElementById("intersectionObserver2");
  const darkModeToggle = document.querySelector('#dark-mode-toggle');
  const breakpoint = NavBar?.dataset.breakpoint || "1062px";
  const MediaQuery = window.matchMedia(`(min-width: ${breakpoint})`);
  const breakpointValue = NavBar?.dataset.breakpoint;

  // 2. Re-attach Intersection Observers
  // Note: Since these elements are usually inside the <main> (which updates),
  // we must re-observe them every time the page loads.
  if (IntersectionObserver1 && ScrollToTopBtn) {
    let IntersectionObserverResult = new IntersectionObserver(callback1);
    IntersectionObserverResult.observe(IntersectionObserver1);
  }

  // 3. Dark Mode Toggle (Re-bind the click listener)
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      // Darkmode and disabledark mode are in the darkmode.js file
      const isDark = document.documentElement.classList.contains('darkmode');

      if (isDark) {
        document.documentElement.classList.remove('darkmode');
        document.documentElement.classList.add('lightmode');
        localStorage.setItem('darkMode', 'lightmode');
      } else {
        document.documentElement.classList.remove('lightmode');
        document.documentElement.classList.add('darkmode');
        localStorage.setItem('darkMode', 'enabled');
      }
    });
  }

  //    2a) Scroll to top button
  function callback1(entries, IntersectionObserverResult) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Hide button
        ScrollToTopBtn.classList.remove("topBtn__show");
      } else {
        // Show button
        ScrollToTopBtn.classList.add("topBtn__show");
      }
    });
  }

  //    2b) Sticky navbar on widescreens
  if (MediaQuery.matches) {

    let observer2 = new IntersectionObserver(callback2);
    observer2.observe(target1);

    function callback2(entries, observer2) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          NavBar.classList.remove("change_nav_color");
        } else {
          NavBar.classList.add("change_nav_color");
        }
      });
      // }
    }
  }
  window.responsiveClick = responsiveClick;
  window.flipIcon = flipIcon;
});


// Defined just once
//  3) Dropdown behaviour
// When the user clicks on the button, toggle between hiding and showing the dropdown content
function responsiveClick(id, type, cancel) {
  var dropdownID = document.getElementById("dropdown_" + id);
  var dropdownID_height = document.getElementById("dropdown_" + id).scrollHeight;
  //    var dropdownIDChildren = dropdownID.children;
  // 	  console.log(dropdownIDChildren);
  var caretID = document.getElementById("caret_" + id);
  var i;

  if (dropdownID.style.maxHeight) {
    dropdownID.style.maxHeight = null;
    dropdownID.previousElementSibling.classList.remove("active");
    caretID.style.transform = null;
  } else {
    if (cancel === 1) { return }
    dropdownID.style.maxHeight = dropdownID_height + "px";
    dropdownID.previousElementSibling.classList.add("active");
    caretID.style.transform = "rotate(90deg)";
  }
}

//  4) Language changer flip icon
// This code flips the language changer icon 
// and then returns the new URL
function flipIcon() {
  var twoArrowIcon = document.getElementById("twoArrowIcon");
  var translationAnchor = document.getElementById("languageChanger");
  var newBaseURL = translationAnchor.dataset.newurl;
  // Start the icon spinning while javascript works
  twoArrowIcon.classList.add("rotate-hor-center");

  // By default, when users browse to the homepage, they are asked to choose a language once (see index.html)
  // From then on, going to the homepage goes to the preferred language homepage (e.g. /home)
  // Pressing this language changer button clears that preference
  // allowing the user to choose a new default language from the root URL.
  var choice = null;
  localStorage.setItem('lang', choice)

  // This part only applies to the search page. 
  // It finds the search query string and transfers over the search query too
  if (translationAnchor.classList.contains("searchy")) {

    // This class list includes search terms in the new URL when switching from French to English from the search page
    // First get the current URL
    const currentURL = new URL(window.location.href);
    // Extract the search query from the current URL
    var searchParameter = currentURL.searchParams.get("q");
    if (searchParameter == null) {
      var searchParameter = '';
    }
    // Build the new URL
    var newurl = newBaseURL + "?q=" + searchParameter;
    spinAndGiveNewURL(newurl)
    return;
  }

  // Else. For every other page but search, 
  // the animation runs and the new URL is displayed.
  spinAndGiveNewURL(newBaseURL)
}

function spinAndGiveNewURL(newlink) {
  var timeout = 255
  // setTimeout(function onclicky() { navigate(newlink) }, timeout);
  setTimeout(() => {
    // This replaces window.location.href
    navigate(newlink);
  }, timeout);
  return;
}
