import React from 'react';
import styles from '/styles/Home.module.css';
import Link from 'next/link';
import { Technology } from 'config/generated-sdk';

type Props = {
  technology: Technology;
};

const TechnologyCard: React.FC<Props> = ({ technology }) => {
  return (
    <div className={styles.card}>
      <Link href={`/technologies/${technology.slug}`}>
        <p>{technology.name}</p>
      </Link>
    </div>
  );
};

export default TechnologyCard;
