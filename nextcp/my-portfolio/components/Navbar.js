import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.link}>
        Accueil
      </Link>
      <Link href="/about" className={styles.link}>
        À propos
      </Link>
      <Link href="/projects" className={styles.link}>
        Projets
      </Link>
      <Link href="/contact" className={styles.link}>
        Contact
      </Link>
    </nav>
  );
}