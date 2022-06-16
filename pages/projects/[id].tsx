import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { Collaboration, Project } from '../../utils/types';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
import { BACKEND_URL } from '../../utils/consts';
import Link from 'next/link';

type IdProps = {
  project: Project;
};

const Id: NextPage<IdProps> = ({ project }) => {
  return (
    <div>
      <h2 className={styles.title}>{project.name}</h2>
      <p className={styles.description}>{project.description}</p>
      <div>
        <h3>Collaborations</h3>
        {project.collaborations.map((collaboration: Collaboration) => (
          <Link
            key={`collaboration-${collaboration.url}`}
            href={`${collaboration.url}`}
            className={styles.card}
          >
            <div className={styles.card}>
              <h2>{collaboration.collaborator}</h2>
              <p>{collaboration.started_at}</p>
              <p>{collaboration.ended_at}</p>
            </div>
          </Link>
        ))}
      </div>
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
