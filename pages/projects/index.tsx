import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import React from 'react';
import Link from 'next/link';
import { BACKEND_URL } from 'utils/consts';
import Footer from 'components/Footer';
import { projectsApi } from 'config/createAxiosInstance';
import { Project } from 'config/generated-sdk/models/project';

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
          These are some projects where I collaborated
        </p>

        <div className={styles.grid}>
          {projects.map((project: Project) => (
            <Link
              key={`project-${project.id}`}
              href={`/projects/${project.id}`}
              className={styles.card}
            >
              <div className={styles.card}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;

export const getServerSideProps = async () => {
  console.log('BACKEND_URL: ', BACKEND_URL);
  const { data } = await projectsApi.projectsList();

  return {
    props: { projects: data.results },
  };
};
