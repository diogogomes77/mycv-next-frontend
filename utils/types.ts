export type Collaboration = {
  url: string;
  started_at: string;
  ended_at: string;
  project: string;
  collaborator: string;
  technologies: string[];
};

export type Project = {
  id: number;
  name: string;
  description: string;
  collaborations: Collaboration[];
};

export type Technology = {
  id: number;
  name: string;
  content: string;
  url: string;
  parents: string[];
};
