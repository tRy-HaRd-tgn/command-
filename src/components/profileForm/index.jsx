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
        return {
          backgroundColor: "grey",
          color: "white",
          borderColor: "grey",
          height: "6%",
          width: "90.5%",
          paddingLeft: "2%",
          verticalAlign: "center",
        };
      } else {
        return {
          backgroundColor: "orange",
          color: "white",
          borderColor: "orange",
          height: "6%",
          width: "90.5%",
          paddingLeft: "2%",
        };
      }
    } else {
      if (!hardSkills && !hardResults) {
        return {
          backgroundColor: "grey",
          color: "white",
          borderColor: "grey",
          height: "6%",
          width: "90.5%",
          paddingLeft: "2%",
        };
      } else {
        return {
          backgroundColor: "orange",
          color: "white",
          borderColor: "orange",
          height: "6%",
          width: "90.5%",
          paddingLeft: "2%",
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
          style={{
            height: "6%",
            width: "88%",
            borderRadius: "10px",
            paddingLeft: "2%",
            fontSize: "135%",
          }}
          placeholder={"должность/академическая группа"}
          type="text"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        />
        <Input
          style={{
            height: "6%",
            width: "88%",
            borderRadius: "10px",
            paddingLeft: "2%",
            fontSize: "135%",
          }}
          placeholder={"направление обучения"}
          type="text"
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
        />
        <Button
          style={{
            height: "7%",
            width: "contain",
            textAlign: "center",
            fontSize: "calc(125% / 1.2)",
          }}
          className={styles.form_button}
        >
          сохранить
        </Button>
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
        <Button
          style={{
            height: "7%",
            width: "contain",
            textAlign: "center",
            fontSize: "calc(125% / 1.2)",
          }}
          className={styles.form_button}
        >
          предложить проект
        </Button>
      </div>
    </div>
  );
};
