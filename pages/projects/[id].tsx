import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
import Link from 'next/link';
import { Collaboration, Project } from 'utils/types';
import { BACKEND_URL } from 'utils/consts';
import TechnologyList from 'components/TechnologyList';
import ProjectTechnologyList from 'components/ProjectTechnologyList';
import Head from 'next/head';

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
        <div className={styles.grid}>
          {project.collaborations.map((collaboration: Collaboration) => (
            <div
              key={`collaboration-${collaboration.id}`}
              className={styles.card}
            >
              <h2>{collaboration.collaborator.first_name}</h2>
              <p>from: {collaboration.started_at}</p>
              <p>to: {collaboration.ended_at}</p>
              <p>
                {collaboration.collaborator.groups.length > 1
                  ? 'roles: '
                  : 'role: '}
                {collaboration.collaborator.groups.map(group => (
                  <span key={`group-${group.id}`}>{group.name}</span>
                ))}
              </p>

              <div>
                {collaboration.technologies.length > 0 && <h3>Technologies</h3>}
                <TechnologyList technologies={collaboration.technologies} />
              </div>
            </div>
          ))}
        </div>
      </main>
      {project.technologies.length > 0 && (
        <div className={styles.container}>
          <h3>Project Technologies</h3>
          {<ProjectTechnologyList projectTechnologies={project.technologies} />}
        </div>
      )}
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
