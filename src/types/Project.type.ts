export interface Project {
  id: string;
  slug: string;
  body: string;
  collection: "projects";
  data: {
    title: string;
    description: string;
    year: string;
    tags: {
      collection: "tags";
      id: string;
    }[];
  };
}
