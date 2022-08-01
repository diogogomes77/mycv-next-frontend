import React from 'react';
import styles from '/styles/Home.module.css';
import Link from 'next/link';
import { TechnologyProject } from 'config/generated-sdk';

type Props = {
  technologyProject: TechnologyProject;
};

const TechnologyProjectCard: React.FC<Props> = ({ technologyProject }) => {
  return (
    <div className={styles.card}>
      <Link href={`/projects/${technologyProject.slug}`}>
        <p>{technologyProject.name}</p>
      </Link>
    </div>
  );
};

export default TechnologyProjectCard;
