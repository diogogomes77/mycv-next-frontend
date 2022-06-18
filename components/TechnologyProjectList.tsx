import React from 'react';
import { TechnologyProject } from 'utils/types';
import styles from '../styles/Home.module.css';
import TechnologyCard from './TechnologyCard';
import TechnologyProjectCard from './TechnologyProject';

type Props = {
  technologyProject: TechnologyProject[];
};

const TechnologyProjectList: React.FC<Props> = ({ technologyProject }) => {
  return (
    <div className={styles.container}>
      {technologyProject.map(projectTechnology => (
        <>
          <TechnologyProjectCard
            technologyProject={projectTechnology}
            key={`technologyProject-${projectTechnology.id}`}
          />
        </>
      ))}
    </div>
  );
};

export default TechnologyProjectList;
