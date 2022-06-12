export type Project = {
  id: number;
  name: string;
  description: string;
};

export type Technology = {
  id: number;
  name: string;
  content: string;
  url: string;
  parents: string[];
};
