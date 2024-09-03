import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css"

function Navbar() {
  return (
    <div>
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
  );
}

export default Navbar;
