import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My CV</title>
        <meta
          name="description"
          content="A portfolio platform by Diogo Gomes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My CV!</h1>

        <p className={styles.description}>
          Feel free to navigate in all the sections
        </p>
        <div className={styles.grid}>
          <a href="/projects" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Some projects where I participated</p>
          </a>
          <a href="/education" className={styles.card}>
            <h2>Education &rarr;</h2>
            <p>My degrees and courses</p>
          </a>
          <a href="/professional" className={styles.card}>
            <h2>Professional experience &rarr;</h2>
            <p>The jobs I got</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
