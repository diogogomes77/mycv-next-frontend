import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
import { BACKEND_URL } from '../../utils/consts';
import TechnologyList from 'components/TechnologyList';
import { Technology } from 'utils/types';

type IdProps = {
  technology: Technology;
};

const Id: NextPage<IdProps> = ({ technology }) => {
  return (
    <div>
      <h2 className={styles.title}>{technology.name}</h2>
      <p className={styles.description}>{technology.content}</p>
      {technology.parents.length > 0 && <h3>Parent technologies</h3>}
      {technology.parents.length > 0 && (
        <TechnologyList technologies={technology.parents} />
      )}
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
