import { Collaboration, Technology } from 'config/generated-sdk';
import React from 'react';
import styles from '../styles/Home.module.css';
import TechnologyCollaborationCard from './TechnologyCollaborationCard';

type Props = {
  collaborations: Collaboration[];
  technology: Technology;
};

const TechnologyCollaborationList: React.FC<Props> = ({
  collaborations,
  technology,
}) => {
  return (
    <div className={styles.grid}>
      {collaborations.map(collaboration => (
        <div key={`collaboration-${collaboration.id}`} className={styles.card}>
          <TechnologyCollaborationCard
            collaboration={collaboration}
            technology={technology}
          />
        </div>
      ))}
    </div>
  );
};

export default TechnologyCollaborationList;
