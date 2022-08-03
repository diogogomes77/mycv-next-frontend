import React from 'react';
import { Collaboration } from 'config/generated-sdk';
import CollaborationTechnologyList from './CollaborationTechnologyList';
import UserCard from './UserCard';

type Props = {
  collaboration: Collaboration;
};

const CollaborationCard: React.FC<Props> = ({ collaboration }) => {
  const { collaborator, collaborationTechnologies: technologies } =
    collaboration;

  return (
    <div>
      <UserCard user={collaborator} />
      <div>
        {technologies && technologies.length > 0 && <h3>Technologies</h3>}
        {technologies && technologies.length > 0 && (
          <CollaborationTechnologyList technologies={technologies} />
        )}
      </div>
    </div>
  );
};

export default CollaborationCard;
