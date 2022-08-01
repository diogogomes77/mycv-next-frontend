import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import styles from '../../styles/Home.module.css';
import ProjectTechnologyList from 'components/ProjectTechnologyList';
import Head from 'next/head';
import CollaborationList from 'components/CollaborationList';
import Footer from 'components/Footer';
import { ProjectsApiProjectsReadRequest } from 'config/generated-sdk';
import { Project } from 'config/generated-sdk/models/project';
import { projectsApi } from 'apiClients';

type IdProps = {
  project: Project;
};

const Slug: NextPage<IdProps> = ({ project }) => {
  const { collaborations, technologies } = project;
  return (
    <div className={styles.container}>
      <Head>
        <title>{project.name}</title>
        <meta name="description" content="Project where I participated" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{project.name}</h1>
        <p className={styles.description}>{project.description}</p>

        {collaborations && collaborations.length > 0 && (
          <div className={styles.container}>
            <h3>Collaborations</h3>
            <CollaborationList collaborations={collaborations} />
          </div>
        )}

        {technologies && technologies.length > 0 && (
          <div className={styles.container}>
            <h3>Project Technologies</h3>
            {<ProjectTechnologyList projectTechnologies={technologies} />}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Slug;

export const getServerSideProps: GetServerSideProps = async context => {
  const {
    query: { slug },
  } = context;

  const params: ProjectsApiProjectsReadRequest = {
    slug: (slug ?? '') as string,
  };
  const { data } = await projectsApi.projectsRead(params);

  return {
    props: { project: data },
  };
};
