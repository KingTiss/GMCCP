import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mes Projets</title>
        <meta name="description" content="Découvrez mes projets" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Projets</h1>
        <p className={styles.description}>
        Take a good look
        </p>
      </main>
    </div>
  );
}