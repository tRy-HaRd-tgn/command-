import styles from "./styles.module.scss";
import { Button, Input } from "../../components";
import { useState } from "react";
export const ProfileForm = ({
  softSkills,
  hardSkills,
  setHardskills,
  setSoftskills,
  softResults,
  hardResults,
  softResultsSecond,
}) => {
  function styleDefiner(temp) {
    if (temp == 1) {
      if (!softSkills && !softResults && !softResultsSecond) {
        return { backgroundColor: "grey", color: "white", borderColor: "grey" };
      } else {
        return {
          backgroundColor: "orange",
          color: "white",
          borderColor: "orange",
        };
      }
    } else {
      if (!hardSkills && !hardResults) {
        return {
          backgroundColor: "grey",
          color: "white",
          borderColor: "grey",
        };
      } else {
        return {
          backgroundColor: "orange",
          color: "white",
          borderColor: "orange",
        };
      }
    }
  }
  const [group, setGroup] = useState("");
  const [direction, setDirection] = useState("");
  const [project, setProject] = useState("");
  return (
    <div className={styles.container__content__info__flex}>
      <div className={styles.container__content__info__flex__inputs}>
        <Input
          className={styles.form_input}
          placeholder={"должность/академическая группа"}
          type="text"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        />
        <Input
          className={styles.form_input}
          placeholder={"направление обучения"}
          type="text"
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
        />
        <Button
          style={styleDefiner(1)}
          className={styles.form_button}
          onClick={setSoftskills}
        >
          оценка Softskills
        </Button>
        <Button
          style={styleDefiner(0)}
          onClick={setHardskills}
          className={styles.form_button}
        >
          оценка Hardskills
        </Button>
        <Input
          style={{
            height: "100%",
            margin: "0",
            paddingTop: "1.1%",
            paddingBottom: "1.1%",
            paddingRight: "0.65%",
            fontSize: "135%",
          }}
          placeholder={"предложить проект"}
          type="text"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />
      </div>
      <Button
        style={{
          height: "auto",
          width: "24%",
          textAlign: "center",
          fontSize: "calc(125% / 1.2)",
          marginLeft: "8%",
          marginTop: "2%",
        }}
        className={styles.form_button}
      >
        сохранить
      </Button>
    </div>
  );
};
