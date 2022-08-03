import { TechnologyProject } from 'config/generated-sdk';
import React from 'react';
import styles from '../styles/Home.module.css';
import TechnologyProjectCard from './TechnologyProject';

type Props = {
  technologyProject: TechnologyProject[];
};

const TechnologyProjectList: React.FC<Props> = ({ technologyProject }) => {
  return (
    <div className={styles.container}>
      {technologyProject.map(projectTechnology => (
        <TechnologyProjectCard
          technologyProject={projectTechnology}
          key={projectTechnology.id}
        />
      ))}
    </div>
  );
};

export default TechnologyProjectList;
