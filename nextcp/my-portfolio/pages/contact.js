import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contactez-moi" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Contactez-moi</h1>
        <p className={styles.description}>
          Holla at us
        </p>
      </main>
    </div>
  );
}