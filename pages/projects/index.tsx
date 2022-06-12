import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
import React from 'react';
import { Project } from '../../utils/types';
import { BACKEND_URL } from '../../utils/consts';
import Footer from '../components/Footer';

type ProjectsProps = {
  projects: Project[];
};

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="List of collaboration projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Projects</h1>

        <p className={styles.description}>
          These are some projects that counted with my collaboration
        </p>

        <div className={styles.grid}>
          {projects.map((project: Project) => (
            <a
              key={`project-${project.id}`}
              href={`/projects/${project.id}`}
              className={styles.card}
            >
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${BACKEND_URL}projects/`);

  return {
    props: { projects: data.results },
  };
};
