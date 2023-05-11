import styles from "./page.module.css";
import CountInfo from "./components/CountInfo";

export default function Main() {
  return (
    <div className={styles.main}>
      <CountInfo />
    </div>
  );
}
