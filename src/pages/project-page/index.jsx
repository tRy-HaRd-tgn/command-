import styles from "./styles.module.scss";
import { Header } from "../../components";
import { useSelector } from "react-redux";

export const ProjectPage = (props) => {
  const projects = useSelector((state) => state.projects.projects);
  console.log(projects);
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.projectWrapper}>
        <div className={styles.projects}>
          <h2 className={styles.projectHeader}>Витрина проектов</h2>
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
                    <p className={styles.name}>название: {value.name}</p>
                    <p className={styles.description}>
                      описание:{value.description}
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
