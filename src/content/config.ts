// 1. Import utilities from `astro:content`
import { z, reference, defineCollection } from "astro:content";

// 2. Define your collection(s)
const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      logo: image()
        .refine((img) => img.width >= 200, {
          message: "GRRR image must be at least 200 pixels wide!",
        })
        .optional(),
      preview: image()
        .refine((img) => img.width >= 200, {
          message: "GRRR image must be at least 200 pixels wide!",
        })
        .optional(),
      year: z.number(),
      showcase: z.boolean(),
      platforms: z.array(z.string()),
      links: z
        .array(
          z.object({
            title: z.string(),
            link: z.string(),
            icon: z.string(),
          }),
        )
        .optional(),
      tags: z.array(z.string()),
      archived: z.boolean().optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: projectCollection,
};
