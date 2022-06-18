import axios from 'axios';
import Footer from 'components/Footer';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { BACKEND_URL } from 'utils/consts';
import { Technology } from 'utils/types';
import styles from '../../styles/Home.module.css';

type TechnologiesProps = {
  technologies: Technology[];
};

const Technologies: NextPage<TechnologiesProps> = ({ technologies }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Technologies</title>
        <meta
          name="description"
          content="List of technologies used in the projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Technologies</h1>

        <p className={styles.description}>
          These are some of the technologies used in the projects
        </p>

        <div className={styles.grid}>
          {technologies.map(technology => (
            <a
              key={`technology-${technology.id}`}
              href={`/technologies/${technology.id}`}
              className={styles.card}
            >
              <h2>{technology.name}</h2>
              <p>{technology.content}</p>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Technologies;

export const getServerSideProps = async () => {
  console.log('BACKEND_URL: ', BACKEND_URL);
  const { data } = await axios.get(`${BACKEND_URL}technologies/`);

  return {
    props: { technologies: data.results },
  };
};
