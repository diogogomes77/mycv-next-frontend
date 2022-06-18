import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
import { Project } from 'utils/types';
import { BACKEND_URL } from 'utils/consts';
import ProjectTechnologyList from 'components/ProjectTechnologyList';
import Head from 'next/head';
import CollaborationList from 'components/CollaborationList';
import Footer from 'components/Footer';

type IdProps = {
  project: Project;
};

const Id: NextPage<IdProps> = ({ project }) => {
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

        <h3>Collaborations</h3>
        <CollaborationList collaborations={project.collaborations} />

        {project.technologies.length > 0 && (
          <div className={styles.container}>
            <h3>Project Technologies</h3>
            {
              <ProjectTechnologyList
                projectTechnologies={project.technologies}
              />
            }
          </div>
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

  const { data } = await axios.get(`${BACKEND_URL}projects/${id}`);

  return {
    props: { project: data },
  };
};
