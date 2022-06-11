import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { Project } from '../../utils/types';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
import { number } from 'prop-types';

type IdProps = {
  project: Project;
};

const Id: NextPage<IdProps> = ({ project }) => {
  return (
    <div>
      <h1 className={styles.title}>{project.name}</h1>
      <p className={styles.description}>{project.description}</p>
    </div>
  );
};

export default Id;

const context = { query: { id: number } };

export const getServerSideProps: GetServerSideProps = async context => {
  const {
    query: { id },
  } = context;
  const { data } = await axios.get(
    `https://mycv-django-api-staging.herokuapp.com/projects/${id}`,
  );

  return {
    props: { project: data },
  };
};
