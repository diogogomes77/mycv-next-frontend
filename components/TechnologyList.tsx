import React from 'react';
import { Technology } from 'utils/types';
import styles from '../styles/Home.module.css';
import TechnologyCard from './TechnologyCard';

type Props = {
  technologies: Technology[];
};

const TechnologyList: React.FC<Props> = ({ technologies }) => {
  return (
    <div className={styles.container}>
      {technologies.map((parent: Technology) => (
        <TechnologyCard technology={parent} key={`technology-${parent.id}`} />
      ))}
    </div>
  );
};

export default TechnologyList;
