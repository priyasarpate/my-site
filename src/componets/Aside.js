import React from "react";
import styles from "../app/page.module.css";
import profile from "../images/profile.jpg";
import Image from "next/image";

function Aside() {
  return (
    <div>
      <aside className={styles.aside}>
        <Image src={profile} alt="" className={styles.profile} />
        <h1>Gunpriya Sarpate</h1>
        <p className={styles.intro_text}>
          Welcome to my digital garden where I share what Im learning about
          shipping great products, becoming a better developer and growing a
          career in tech.
        </p>
      </aside>
    </div>
  );
}

export default Aside;
