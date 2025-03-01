// 1. Import utilities from `astro:content`
import { z, reference, defineCollection } from "astro:content";

// 2. Define your collection(s)
const tagCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    showcase: z.boolean(),
  }),
});

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      logo: image()
        .refine((img) => img.width >= 600, {
          message: "GRRR image must be at least 600 pixels wide!",
        })
        .optional(),
      preview: image()
        .refine((img) => img.width >= 600, {
          message: "GRRR image must be at least 600 pixels wide!",
        })
        .optional(),
      description: z.string(),
      year: z.string(),
      links: z
        .array(
          z.object({
            title: z.string(),
            link: z.string(),
            icon: z.string(),
          }),
        )
        .optional(),
      tags: z.array(reference("tags")),
      archived: z.boolean().optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  tags: tagCollection,
  projects: projectCollection,
};
