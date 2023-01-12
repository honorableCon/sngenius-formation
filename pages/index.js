import { Seo } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Seo />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://formation.sngenius.tech">
            SN Genius formation
          </a>
        </h1>
      </main>
    </div>
  );
}
