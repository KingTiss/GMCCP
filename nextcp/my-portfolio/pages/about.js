import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>À propos</title>
        <meta name="description" content="À propos de moi" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>A propos</h1>
        <p className={styles.description}>
          Last of a dead breed
        </p>
      </main>
    </div>
  );
}