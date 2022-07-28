import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import styles from '../../styles/Home.module.css';
import TechnologyList from 'components/TechnologyList';
import Head from 'next/head';
import Footer from 'components/Footer';
import TechnologyProjectList from 'components/TechnologyProjectList';
import TechnologyCollaborationList from 'components/TechnologyCollaborationList';
import {
  TechnologiesApiTechnologiesReadRequest,
  Technology,
} from 'config/generated-sdk';
import { technologiesApi } from 'apiClients';

type IdProps = {
  technology: Technology;
};

const Id: NextPage<IdProps> = ({ technology }) => {
  const { parents, projects, collaborations } = technology;

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
          <TechnologyList technologies={parents as unknown as Technology[]} />
        )}

        {technology.projects.length > 0 && <h3>Projects</h3>}
        {technology.projects.length > 0 && (
          <TechnologyProjectList technologyProject={projects} />
        )}

        {technology.collaborations.length > 0 && <h3>Collaborations</h3>}
        {technology.collaborations.length > 0 && (
          <TechnologyCollaborationList collaborations={collaborations} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Id;

export const getServerSideProps: GetServerSideProps = async context => {
  const {
    query: { id },
  } = context;

  const params: TechnologiesApiTechnologiesReadRequest = {
    id: (id ?? 0) as number,
  };

  const { data } = await technologiesApi.technologiesRead(params);

  return {
    props: { technology: data },
  };
};
