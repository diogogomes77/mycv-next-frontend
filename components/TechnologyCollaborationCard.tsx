import React from 'react';
import Link from 'next/link';
import { Collaboration, Technology } from 'config/generated-sdk';
import UserCard from './UserCard';

type Props = {
  collaboration: Collaboration;
  technology: Technology;
};

const TechnologyCollaborationCard: React.FC<Props> = ({
  collaboration,
  technology,
}) => {
  const { collaborator, project, collaborationTechnologies } = collaboration;
  const collabTech = collaborationTechnologies?.find(
    collabTech => collabTech.technologyId === technology.id,
  );
  return (
    <div>
      <UserCard user={collaborator} />
      <Link
        key={`project-${collaboration.project.slug}`}
        href={`/projects/${collaboration.project.slug}`}
      >
        <div>
          <h4>Project</h4>
          <h2>{project.name}</h2>
          <p>{collabTech?.comment}</p>
        </div>
      </Link>
    </div>
  );
};

export default TechnologyCollaborationCard;
