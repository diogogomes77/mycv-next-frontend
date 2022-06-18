import React from 'react';
import styles from '/styles/Home.module.css';
import { Collaboration } from 'utils/types';
import TechnologyList from './TechnologyList';

type Props = {
  collaboration: Collaboration;
};

const CollaborationCard: React.FC<Props> = ({ collaboration }) => {
  return (
    <div className={styles.card}>
      <h2>{collaboration.collaborator.first_name}</h2>
      <p>from: {collaboration.started_at}</p>
      <p>to: {collaboration.ended_at}</p>
      <p>
        {collaboration.collaborator.groups.length > 1 ? 'roles: ' : 'role: '}
        {collaboration.collaborator.groups.map(group => (
          <span key={`group-${group.id}`}>{group.name}</span>
        ))}
      </p>

      <div>
        {collaboration.technologies.length > 0 && <h3>Technologies</h3>}
        <TechnologyList technologies={collaboration.technologies} />
      </div>
    </div>
  );
};

export default CollaborationCard;
