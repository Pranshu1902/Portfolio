export type techType = {
  name: string;
  image?: string;
};

export type projectType = {
  name: string;
  description: string;
  image: any;
  githubLink: string;
  link?: string;
  tech: techType[];
};
