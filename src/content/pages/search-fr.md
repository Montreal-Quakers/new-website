---
title: "Recherche"
lang: "fr"
translationID: "search"
og-title: "Recherche sur le site"
---
<div class="search-wrapper" transition:persist="search-ui">
  <div id="pagefind-search-ui"></div>
</div>

<style is:global>{`
  
  :root { --pagefind-ui-width: 100%; }
  .search-wrapper { margin: 2rem 0; width: 100%; }
  .pagefind-ui__filter-value { display: none; }

  #pagefind-search-ui {
    --pagefind-ui-primary: var(--color-1);
    --pagefind-ui-text: var(--body-text);
    --pagefind-ui-background: var(--body-bg);
    --pagefind-ui-border: var(--color-1-light);
    --pagefind-ui-tag: var(--color-1-light);
  }

  #pagefind-search-ui .pagefind-ui__result-title,
  #pagefind-search-ui .pagefind-ui__result-link {
    font-weight: 600;
    color: var(--color-1) !important;
    text-decoration: none;
  }
  #pagefind-search-ui .pagefind-ui__result-excerpt,
  #pagefind-search-ui .pagefind-ui__message,
  #pagefind-search-ui .pagefind-ui__search-input,
  #pagefind-search-ui .pagefind-ui__button {
    font-family: "Source Sans 3", sans-serif !important;
  }

  .darkmode #pagefind-search-ui .pagefind-ui__search-input {
    background-color: var(--body-bg);
    color: var(--body-text);
    border: 1px solid var(--color-1);
  }

  #pagefind-search-ui mark {
    background-color: var(--color-1);
    color: var(--alert-text);
    border-radius: 2px;
    padding: 0 2px;
  }

  #pagefind-search-ui .pagefind-ui__filter-checkbox:checked {
    background-color: var(--color-1);
    border-color: var(--color-1-dark);
  }
  #pagefind-search-ui .pagefind-ui__filter-block {
      display: none;
    }
    .darkmode #pagefind-search-ui .pagefind-ui__search-input {
    font-family: "Source Sans 3", sans-serif !important;
    background-color: var(--body-bg);
    color: var(--body-text);
  }
`}</style>

<script is:inline>{`
  async function initPagefind() {
    const container = document.querySelector('#pagefind-search-ui');
    if (!container) return;

    // Prevents double-rendering caused by transition:persist
    if (container.innerHTML.trim() !== "") return;

    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    const config = {
      element: "#pagefind-search-ui",
      bundlePath: "/pagefind/",
      autofocus: true,
      focusOnSlash: true,
      showImages: false,
      showFilters: true,
      showEmptyFilters: true,
      translations: { placeholder: "Appuyez sur / pour effectuer une recherche" }, 
      filter: { "language": document.documentElement.lang || "fr" }
    };

    const startSearch = (instance) => {
      if (query) setTimeout(() => instance.triggerSearch(query), 300);
    };

    if (typeof PagefindUI === 'undefined') {
      const script = document.createElement('script');
      script.src = '/pagefind/pagefind-ui.js';
      script.onload = () => {
        const ui = new PagefindUI(config);
        startSearch(ui);
      };
      document.head.appendChild(script);
      
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/pagefind/pagefind-ui.css';
      document.head.appendChild(link);
    } else {
      const ui = new PagefindUI(config);
      startSearch(ui);
    }
  }

  document.addEventListener('astro:page-load', initPagefind);
`}</script>

