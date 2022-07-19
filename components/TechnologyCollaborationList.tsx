import React from 'react';
import { Collaboration, TechnologyCollaboration } from 'utils/types';
import styles from '../styles/Home.module.css';
import TechnologyCollaborationCard from './TechnologyCollaborationCard';

type Props = {
  collaborations: TechnologyCollaboration[];
};

const TechnologyCollaborationList: React.FC<Props> = ({ collaborations }) => {
  return (
    <div className={styles.grid}>
      {collaborations.map(collaboration => (
        <div key={`collaboration-${collaboration.id}`} className={styles.card}>
          <TechnologyCollaborationCard collaboration={collaboration} />
        </div>
      ))}
    </div>
  );
};

export default TechnologyCollaborationList;