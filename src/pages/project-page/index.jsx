import styles from "./styles.module.scss";
import { Header } from "../../components";
import ProjectService from "../../service/ProjectService";
import { useEffect, useState } from "react";
export const ProjectPage = (props) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    try {
      const response = ProjectService.getProjects().then((res) =>
        setProjects(res.data)
      );
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.projectWrapper}>
        <h2 className={styles.projectHeader}>Витрина проектов</h2>
        <div className={styles.projects}>
          <div className={styles.content}>
            {projects
              ? projects?.map((value, index) => (
                  <div className={styles.project}>
                    <div className={styles.imgWrapper}>
                      <img
                        className={styles.projectImg}
                        src={value.picture}
                        alt="error"
                      />
                    </div>
                    <p className={styles.name}>
                      <span className={styles.span}>Название: </span>
                      {value.name}
                    </p>
                    <p className={styles.description}>
                      <span className={styles.span}>Описание: </span>
                      {value.description}
                    </p>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};
