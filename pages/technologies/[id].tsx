import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
import { BACKEND_URL } from '../../utils/consts';
import TechnologyList from 'components/TechnologyList';
import { Technology } from 'utils/types';
import Head from 'next/head';
import Footer from 'components/Footer';
import TechnologyProjectList from 'components/TechnologyProjectList';

type IdProps = {
  technology: Technology;
};

const Id: NextPage<IdProps> = ({ technology }) => {
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

        {technology.parents.length > 0 && <h3>Parent technologies</h3>}
        {technology.parents.length > 0 && (
          <TechnologyList technologies={technology.parents} />
        )}

        {technology.projects.length > 0 && <h3>Projects</h3>}
        {technology.projects.length > 0 && (
          <TechnologyProjectList technologyProject={technology.projects} />
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

  const { data } = await axios.get(`${BACKEND_URL}technologies/${id}`);

  return {
    props: { technology: data },
  };
};
