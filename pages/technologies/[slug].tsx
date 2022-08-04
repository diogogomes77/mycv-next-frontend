import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import styles from '../../styles/Home.module.css';
import TechnologyList from 'components/TechnologyList';
import Head from 'next/head';
import Footer from 'components/Footer';
import TechnologyProjectList from 'components/TechnologyProjectList';
import TechnologyCollaborationList from 'components/TechnologyCollaborationList';
import {
  Collaboration,
  Project,
  TechnologiesApiTechnologiesReadRequest,
  Technology,
} from 'config/generated-sdk';
import { projectsApi, technologiesApi } from 'apiClients';
import { AxiosResponse } from 'axios';
import collaborationsApi from 'apiClients/collaborationsApi ';
import CollaborationList from 'components/CollaborationList';

type IdProps = {
  technology: Technology;
  parents: Technology[];
  projects: Project[];
  collaborations: Collaboration[];
};

const Slug: NextPage<IdProps> = ({
  technology,
  parents,
  projects,
  collaborations,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{technology.name}</title>
        <meta name="description" content="Technology used in projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>{technology.name}</h2>
        <p className={styles.description}>{technology.content}</p>

        {parents && parents.length > 0 && <h3>Parent technologies</h3>}
        {parents && parents.length > 0 && (
          <TechnologyList technologies={parents} />
        )}

        {projects.length > 0 && <h3>Projects</h3>}
        {projects.length > 0 && (
          <TechnologyProjectList technologyProject={projects} />
        )}

        {collaborations.length > 0 && <h3>Collaborations</h3>}
        {collaborations.length > 0 && (
          <TechnologyCollaborationList
            collaborations={collaborations}
            technology={technology}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Slug;

const getParents = async (technology: Technology) => {
  const parents = new Array<Technology>();
  const readPromises: Promise<AxiosResponse<Technology, any>>[] = [];

  technology.parents?.forEach(parentTech => {
    const { slug } = parentTech;
    const readPromise = technologiesApi.technologiesRead({
      slug,
    });
    readPromise.then(({ data }) => parents.push(data));
    readPromises.push(readPromise);
  });

  await Promise.all(readPromises);

  return parents;
};

const getProjects = async (technology: Technology) => {
  const projects = new Array<Project>();
  const readPromises: Promise<AxiosResponse<Project, any>>[] = [];

  technology.projects?.forEach(projectTech => {
    const { slug } = projectTech;
    const readPromise = projectsApi.projectsRead({ slug });
    readPromise.then(({ data }) => projects.push(data));
    readPromises.push(readPromise);
  });

  await Promise.all(readPromises);

  return projects;
};

const getCollaborations = async (technology: Technology) => {
  const collaborations = new Array<Collaboration>();
  const readPromises: Promise<AxiosResponse<Collaboration, any>>[] = [];

  technology.collaborations?.forEach(collaborationTech => {
    const { id } = collaborationTech;
    if (!id) return;

    const readPromise = collaborationsApi.collaborationsRead({ id });
    readPromise.then(({ data }) => collaborations.push(data));
    readPromises.push(readPromise);
  });

  await Promise.all(readPromises);

  return collaborations;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const {
    query: { slug },
  } = context;

  const params: TechnologiesApiTechnologiesReadRequest = {
    slug: (slug ?? '') as string,
  };

  const { data: technology } = await technologiesApi.technologiesRead(params);

  const $parents = getParents(technology);
  const $projects = getProjects(technology);
  const $collaborations = getCollaborations(technology);

  const [parents, projects, collaborations] = await Promise.all([
    $parents,
    $projects,
    $collaborations,
  ]);

  return {
    props: { technology, parents, projects, collaborations },
  };
};
