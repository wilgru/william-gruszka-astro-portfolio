export interface Tag {
  id: string;
  collection: "tags";
  data: {
    name: string;
    colour: string;
  };
}
