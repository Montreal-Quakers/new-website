// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://montreal.quaker.ca',
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
