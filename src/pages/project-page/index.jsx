import styles from "./styles.module.scss";
import { Header } from "../../components";
import { useEffect } from "react";
import 

export const ProjectPage = (props) => {
  useEffect(() => {
    console.log("получние проектов");
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.projectWrapper}>
        <div className={styles.projects}>
          <h2 className={styles.projectHeader}>Витрина проектов</h2>
        </div>
      </div>
    </div>
  );
};
