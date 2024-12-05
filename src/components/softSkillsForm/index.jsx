import styles from "./styles.module.scss";
import { SoftSkillQuestion } from "../softSkillQuestion";
export const SoftSkillsForm = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Какой вклад я могу внести в работу команды?</h2>
      {...new Array(7)
        .fill(0)
        .map((_, index) => <SoftSkillQuestion style={{marginLeft: "1%"}} text={`Вопрос ${index + 1}`} />)}
    </div>
  );
};
