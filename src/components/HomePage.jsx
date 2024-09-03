import styles from "../app/page.module.css";
import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>GUNPRIYA SARPATE</h1>
        <p className={styles.descriptionTitle}>
          Excited about the Indian startups ecosystem & healthcare ☘️
        </p>
        <Navbar />
      </div>
      <h3 className={styles.blogTitle}>Filtered & Unfiltered Thoughts</h3>
    </main>
  );
}
