import styles from "./styles.module.scss";
import { Header } from "../../components";
import { useEffect, useState } from "react";
import ProjectService from "../../service/ProjectService";

export const ProjectPage = (props) => {
  const [project, setProjects] = useState();
  async function getProjects() {
    const response = await ProjectService.getProjects();
    setProjects(response.data);
  }
  useEffect(() => {
    try {
      getProjects();
      //setProjects(response);
    } catch (e) {}
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.projectWrapper}>
        <div className={styles.projects}>
          <h2 className={styles.projectHeader}>Витрина проектов</h2>
          {}
        </div>
      </div>
    </div>
  );
};
