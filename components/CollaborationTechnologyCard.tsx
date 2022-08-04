import React from 'react';
import styles from '/styles/Home.module.css';
import Link from 'next/link';
import { CollaborationTechnology } from 'config/generated-sdk/models/collaboration-technology';

type Props = {
  collabTech: CollaborationTechnology;
};

const CollaborationTechnologyCard: React.FC<Props> = ({ collabTech }) => {
  return (
    <Link
      key={collabTech.technologySlug}
      href={`/technologies/${collabTech.technologySlug}`}
    >
      <div>
        <h4>{collabTech.technologyName}</h4>
        <p>{collabTech.comment}</p>
      </div>
    </Link>
  );
};

export default CollaborationTechnologyCard;
