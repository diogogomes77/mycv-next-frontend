import { ProjectTechnology, Technology } from 'config/generated-sdk';
import React from 'react';
import styles from '../styles/Home.module.css';
import TechnologyCard from './TechnologyCard';

type Props = {
  projectTechnologies: ProjectTechnology[];
  technologies: Technology[];
};

const ProjectTechnologyList: React.FC<Props> = ({
  projectTechnologies,
  technologies,
}) => {
  return (
    <div className={styles.container}>
      {projectTechnologies.map(projectTechnology => {
        const technology = technologies.find(
          tech => tech.id === projectTechnology.technologyId,
        );

        if (technology) {
          return (
            <>
              <TechnologyCard
                technology={technology}
                key={`projectTechnology-${technology.id}`}
              />
              <p key={`projectTechnology-${technology.id}`}>
                {projectTechnology.comment}
              </p>
            </>
          );
        } else {
          return (
            <>
              <p>Nothing</p>
            </>
          );
        }
      })}
    </div>
  );
};

export default ProjectTechnologyList;
