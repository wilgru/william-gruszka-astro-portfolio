// 1. Import utilities from `astro:content`
import { z, reference, defineCollection } from "astro:content";

// 2. Define your collection(s)
const tagCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    colour: z.string(),
  }),
});

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(reference("tag")),
    // image: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  tag: tagCollection,
  project: projectCollection,
};
