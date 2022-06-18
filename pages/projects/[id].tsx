import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
import Link from 'next/link';
import { Collaboration, Project } from 'utils/types';
import { BACKEND_URL } from 'utils/consts';
import TechnologyList from 'components/TechnologyList';
import ProjectTechnologyList from 'components/ProjectTechnologyList';

type IdProps = {
  project: Project;
};

const Id: NextPage<IdProps> = ({ project }) => {
  return (
    <div>
      <h2 className={styles.title}>{project.name}</h2>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.container}>
        <h3>Collaborations</h3>
        {project.collaborations.map((collaboration: Collaboration) => (
          <div
            key={`collaboration-${collaboration.id}`}
            className={styles.card}
          >
            <div className={styles.card}>
              <h2>{collaboration.collaborator.first_name}</h2>
              <p>started: {collaboration.started_at}</p>
              <p>ended: {collaboration.ended_at}</p>
              <p>roles: </p>
              {collaboration.collaborator.groups.map(group => (
                <div key={`group-${group.id}`} className={styles.card}>
                  <p>{group.name}</p>
                </div>
              ))}

              <div>
                {collaboration.technologies.length > 0 && <h3>Technologies</h3>}
                {collaboration.technologies.map(technology => (
                  <div
                    key={`technology-${technology.id}`}
                    className={styles.card}
                  >
                    <Link href={`/technologies/${technology.id}`}>
                      <p>{technology.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {project.technologies.length > 0 && (
        <div className={styles.container}>
          <h3>Technologies</h3>
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
