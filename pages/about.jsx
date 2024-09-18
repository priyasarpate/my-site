import styles from "../styles/Reads.module.css";
import Navbar from "@/components/Navbar";

export default function about() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.blogTitle}>A bit about myself.</h1>
        <Navbar />
      </div>
      about me
    </main>
  );
}
