import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      image: image(),
    }),
});

export const collections = {
  projects: projectCollection,
};
