import React from 'react';
import { Collaboration } from 'utils/types';
import styles from '../styles/Home.module.css';
import CollaborationCard from './CollaborationCard';

type Props = {
  collaborations: Collaboration[];
};

const CollaborationList: React.FC<Props> = ({ collaborations }) => {
  return (
    <div className={styles.grid}>
      {collaborations.map(collaboration => (
        <div key={`collaboration-${collaboration.id}`} className={styles.card}>
          <CollaborationCard collaboration={collaboration} />
        </div>
      ))}
    </div>
  );
};

export default CollaborationList;
