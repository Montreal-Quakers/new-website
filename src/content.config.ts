import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';


const pages = defineCollection({
  // Added .html to the pattern
  loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx,html}' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    author: z.string().default('Anonymous'),
    pubDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.string().default('en'),
    translationID: z.string().optional(),
    usage: z.string().optional(),
    type: z.string().optional(),
  }),
});

// Repeat similar loader logic for blog and alerts if they live in subfolders
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().optional(),
    lang: z.string().default('en'),
    translationID: z.string().optional(),
    pubDate: z.coerce.date().optional(),
  }),
});

const alerts = defineCollection({
  loader: glob({ base: './src/content/alerts', pattern: '**/*.{md,mdx}' }),
});

export const collections = { blog, pages, alerts };
