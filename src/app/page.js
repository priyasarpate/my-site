import Aside from "@/componets/Aside";
import Cards from "@/componets/Cards";
import styles from './page.module.css'
import Cards_two from "@/componets/Cards_two";

export default function Home() {
  return (
    <div className={styles.grid_container}>
      <Aside />
      <Cards />
      {/* <Cards_two /> */}
    </div>
  );
}
