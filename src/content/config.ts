import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    
    image: z.string().nullable(),
    link: z.string().url().nullable(),
    repoLink: z.string().url(),
    techIcons: z.array(z.string())
  })
});

const experiencesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    year: z.number(),
    techIcons: z.array(z.string()).optional(),
    // otros campos que uses en tus md
  }),
});

const goalsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    // o solo deja el contenido Markdown para la parte textual
  }),
});
const infoCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  info:infoCollection,
  projects: projectsCollection,
  experiences: experiencesCollection,
  goals: goalsCollection,
};