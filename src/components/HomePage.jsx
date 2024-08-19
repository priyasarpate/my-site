import Link from "next/link";
import styles from "../app/page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>GUNPRIYA SARPATE</h1>
        <p className={styles.descriptionTitle}>
          Excited about the Indian startups ecosystem & healthcare ☘️
        </p>
        <div className={styles.routes}>
          <Link href="/" className={styles.routesItems}>
            Writing
          </Link>
          <Link href="/about" className={styles.routesItems}>
            About me
          </Link>
          <Link href="/bookself" className={styles.routesItems}>
            Bookshelf
          </Link>
          <Link href="/reads" className={styles.routesItems}>
            Random Reads
          </Link>
        </div>
        <hr className={styles.hr}></hr>
      </div>
      <h3 className={styles.blogTitle}>Filtered & Unfiltered Thoughts</h3>
    </main>
  );
}
