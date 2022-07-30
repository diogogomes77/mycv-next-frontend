import React from 'react';
import styles from '/styles/Home.module.css';
import TechnologyList from './TechnologyList';
import { Collaboration, Technology } from 'config/generated-sdk';

type Props = {
  collaboration: Collaboration;
};

const CollaborationCard: React.FC<Props> = ({ collaboration }) => {
  const { collaborator, groups, technologies } = collaboration;

  return (
    <div className={styles.card}>
      <h2>{collaborator?.firstName}</h2>
      <p>from: {collaboration.startedAt}</p>
      <p>to: {collaboration.endedAt}</p>
      <p>
        {groups.length > 1 ? 'roles: ' : 'role: '}
        {groups &&
          groups.map(group => (
            <span key={`group-${group.id}`}>{group.name}</span>
          ))}
      </p>

      <div>
        {technologies && technologies.length > 0 && <h3>Technologies</h3>}
        {technologies && technologies.length > 0 && (
          <TechnologyList technologies={technologies as Technology[]} />
        )}
      </div>
    </div>
  );
};

export default CollaborationCard;
