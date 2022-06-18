export type Group = {
  id: number;
  name: string;
};

export type Collaborator = {
  id: number;
  first_name: string;
  last_name: string;
  groups: Group[];
};

export type Collaboration = {
  id: number;
  started_at: string;
  ended_at: string;
  project: string;
  collaborator: Collaborator;
  technologies: Technology[];
};

export type Project = {
  id: number;
  name: string;
  description: string;
  collaborations: Collaboration[];
  technologies: ProjectTechnology[];
};

export type ProjectTechnology = {
  id: number;
  comment: string;
  technology: Technology;
};

export type TechnologyProject = {
  id: number;
  name: string;
};

export type Technology = {
  id: number;
  name: string;
  content: string;
  url: string;
  parents: Technology[];
  projects: TechnologyProject[];
};
