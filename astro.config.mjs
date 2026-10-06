// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://montreal.quaker.ca',
  redirects: {
    '/a_propos': '/à_propos',
    '/book_bible': 'https://us02web.zoom.us/j/85472418591?pwd=a2ZFSWlmRCt2RXZZTDVsNWU2N0xCQT09',
    '/coordonnees': '/centre-greene',
    '/etape_suivante': '/étape_suivante',
    '/en/index': '/home',
    '/fr/index': '/accueil',
    '/glossaire': 'https://glossaire.summerhays.net/',
    '/glossary': 'https://glossary.summerhays.net/',
    '/index-choose': '/accueil',
    '/index-en': '/home',
    '/index-fr': '/accueil',
    '/inscription-liste': 'https://docs.google.com/forms/d/e/1FAIpQLSdUxWxiv6EZgot4J2zbB8XQXIS0Lw1fnqD26jZL6JoRpWzr9Q/viewform',
    '/list-signup': 'https://docs.google.com/forms/d/e/1FAIpQLSdYV3FDtn5vV1q0HNA15bwexgngyFSH1QNpC7PkRvO3Op3XTw/viewform',
    '/meet': 'https://us02web.zoom.us/j/84658280579?pwd=WU4ydmg0eTh1Q3RZL0Y1RmRDWEJydz09',
    '/midweek-meet': 'https://us02web.zoom.us/j/84658280579?pwd=WU4ydmg0eTh1Q3RZL0Y1RmRDWEJydz09',
    '/podcasts': '/next_steps/podcasts',
    '/temoignages': '/témoignages',
    '/quebec': '/québec',
    '/sitemap-fr': '/carte-du-site',
    '/what_I_do': '/what_i_do',
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          fr: 'fr-CA',
        },
      },
    }), icon()],
  vite: {
    ssr: {
      noExternal: ['neotraverse']
    },
    build: {
      rollupOptions: {
        // This stops the "failed to resolve import" error
        external: ['/pagefind/pagefind-ui.js']
      }
    }
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport', // Options: 'hover', 'tap', 'viewport', 'load'
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Atkinson',
      cssVariable: '--font-atkinson',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/atkinson-regular.woff'],
            weight: 400,
            style: 'normal',
            display: 'swap',
          },
          {
            src: ['./src/assets/fonts/atkinson-bold.woff'],
            weight: 700,
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
    {
      name: "Courier Prime",
      provider: fontProviders.local(),
      cssVariable: "--font-courier",
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/courier-prime-latin-400-normal.woff2"]
          },
          {
            weight: 400,
            style: "italic",
            src: ["./src/assets/fonts/courier-prime-latin-400-italic.woff2"]
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/courier-prime-latin-700-normal.woff2"]
          },
          {
            weight: 700,
            style: "italic",
            src: ["./src/assets/fonts/courier-prime-latin-700-italic.woff2"]
          },
        ]
      }
    },
    {
      name: "Bitter",
      provider: fontProviders.local(),
      cssVariable: "--font-bitter",
      options: {
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: ["./src/assets/fonts/Bitter-VariableFont_wght.woff2"]
          },
          {
            weight: "100 900",
            style: "italic",
            src: ["./src/assets/fonts/Bitter-Italic-VariableFont_wght.woff2"]
          },
        ]
      }
    },
    {
      name: "Source Sans 3",
      provider: fontProviders.local(),
      cssVariable: "--font-source-sans",
      options: {
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: ["./src/assets/fonts/SourceSans3-VariableFont_wght.woff2"]
          },
          {
            weight: "100 900",
            style: "italic",
            src: ["./src/assets/fonts/SourceSans3-Italic-VariableFont_wght.woff2"]
          },
        ]
      }
    },
  ],
});
