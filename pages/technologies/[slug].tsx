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
import { AxiosResponse } from 'axios';

type IdProps = {
  technology: Technology;
  parents: Technology[];
};

const Slug: NextPage<IdProps> = ({ technology, parents }) => {
  const { projects, collaborations } = technology;

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

export default Slug;

export const getServerSideProps: GetServerSideProps = async context => {
  const {
    query: { slug },
  } = context;

  const params: TechnologiesApiTechnologiesReadRequest = {
    slug: (slug ?? '') as string,
  };

  const { data: technology } = await technologiesApi.technologiesRead(params);

  const parents = new Array<Technology>();
  const readPromises: Promise<AxiosResponse<Technology, any>>[] = [];

  technology.parents?.forEach(parentTech => {
    const { slug } = parentTech;
    console.log('technologySlug: ', slug);
    const readPromise = technologiesApi.technologiesRead({
      slug,
    });
    readPromise.then(({ data }) => parents.push(data));
    readPromises.push(readPromise);
  });

  await Promise.all(readPromises);

  return {
    props: { technology, parents },
  };
};
