import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const whitepaper = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/whitepaper' }),
  schema: z.object({
    title: z.string(),
    section: z.number(),
    description: z.string().optional(),
  }),
});

export const collections = { whitepaper };
