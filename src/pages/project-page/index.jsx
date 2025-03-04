import styles from "./styles.module.scss";
import { Header } from "../../components";
import { useEffect } from "react";
export const ProjectPage = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.projectWrapper}>
        <div className={styles.projects}></div>
      </div>
    </div>
  );
};
