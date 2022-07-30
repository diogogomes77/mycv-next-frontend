import React from 'react';
import styles from '/styles/Home.module.css';
import Link from 'next/link';
import { TechnologyCollaboration } from 'config/generated-sdk';

type Props = {
  collaboration: TechnologyCollaboration;
};

const TechnologyCollaborationCard: React.FC<Props> = ({ collaboration }) => {
  return (
    <div className={styles.card}>
      <h3>{collaboration.collaborator?.firstName}</h3>
      <Link
        key={`project-${collaboration.project?.id}`}
        href={`/projects/${collaboration.project?.id}`}
      >
        <h2>{collaboration.project?.name}</h2>
      </Link>
    </div>
  );
};

export default TechnologyCollaborationCard;
