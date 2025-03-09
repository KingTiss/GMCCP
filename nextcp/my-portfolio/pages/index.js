import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mon Portfolio</title>
        <meta name="description" content="Bienvenue sur mon portfolio" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>My Portfolio</h1>
        <p className={styles.description}>
          Enjoy the ride !
        </p>

        <div className={styles.imageContainer}>
          <Image
            src="https://www.svgrepo.com/show/23012/profile-user.svg"
            alt="Photo de profil"
            width={200}
            height={200}
            className={styles.profileImage}
          />
        </div>
      </main>
    </div>
  );
}