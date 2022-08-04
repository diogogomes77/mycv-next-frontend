import Footer from 'components/Footer';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
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
          You are invited to take a look in the following sections
        </p>
        <div className={styles.grid}>
          <Link href="/projects">
            <div className={styles.card}>
              <h2>Projects &rarr;</h2>
              <p>Some projects where I participated</p>
            </div>
          </Link>
          <Link href="/education">
            <div className={styles.card}>
              <h2>Education &rarr;</h2>
              <p>My degrees and courses</p>
            </div>
          </Link>
          <Link href="/professional">
            <div className={styles.card}>
              <h2>Professional experience &rarr;</h2>
              <p>The jobs I got</p>
            </div>
          </Link>
          <Link href="/technologies">
            <div className={styles.card}>
              <h2>Technologies &rarr;</h2>
              <p>The technologies and tools that I worked with</p>
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
