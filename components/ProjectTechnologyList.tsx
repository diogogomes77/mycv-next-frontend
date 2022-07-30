import { ProjectTechnology } from 'config/generated-sdk/models/project-technology';
import React from 'react';
import styles from '../styles/Home.module.css';
import TechnologyCard from './TechnologyCard';

type Props = {
  projectTechnologies: ProjectTechnology[];
};

const ProjectTechnologyList: React.FC<Props> = ({ projectTechnologies }) => {
  return (
    <div className={styles.container}>
      {projectTechnologies.map(
        projectTechnology =>
          projectTechnology.technology && (
            <>
              <TechnologyCard
                technology={projectTechnology.technology}
                key={`projectRechnology-${projectTechnology.id}`}
              />
              <p>{projectTechnology.comment}</p>
            </>
          ),
      )}
    </div>
  );
};

export default ProjectTechnologyList;
