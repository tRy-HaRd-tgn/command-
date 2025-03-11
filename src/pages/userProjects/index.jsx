import styles from "./styles.module.scss";
import { Header } from "../../components";
import { SecondProjectComponent } from "../../components";
import { useEffect, useState } from "react";
import UserService from "../../service/UserService";
export const UserProjects = (props) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    try {
      const response = UserService.getUserProjects().then((res) => {
        setProjects(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h2 className={styles.projectHeader}>Мои проекты</h2>
        <div className={styles.contentArray}>
          {projects?.map((value, index) => {
            return (
              <SecondProjectComponent
                key={index}
                status={value.status}
                img={value.picture}
                name={value.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
