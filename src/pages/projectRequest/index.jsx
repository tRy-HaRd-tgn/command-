import styles from "./styles.module.scss";
import { Header } from "../../components";
export const ProjectRequestPage = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.projectRequestWrapper}>
        <div className={styles.projectRequest}>

        </div>
      </div>
    </div>
  );
};
