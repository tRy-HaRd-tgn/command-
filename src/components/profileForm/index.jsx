import styles from "./styles.module.scss";
import { Button, Input } from "../../components";
import { useState } from "react";
export const ProfileForm = ({
  softSkills,
  hardSkills,
  setHardskills,
  setSoftskills,
}) => {
  const [group, setGroup] = useState("");
  const [direction, setDirection] = useState("");
  const [project, setProject] = useState("");
  return (
    <div className={styles.container__content__info__flex}>
      <div className={styles.container__content__info__flex__inputs}>
        <Input
          style={{
            height: "29%",
            fontSize: "135%",
          }}
          placeholder={"должность/академическая группа"}
          type="text"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        />
        <Input
          style={{
            height: "29%",
            fontSize: "135%",
          }}
          placeholder={"направление обучения"}
          type="text"
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
        />
      </div>
      <div className={styles.buttons_wrapper}>
        <Button
          style={
            !softSkills
              ? { backgroundColor: "grey", color: "white", borderColor: "grey" }
              : {
                  backgroundColor: "orange",
                  color: "white",
                  borderColor: "orange",
                }
          }
          className={styles.form_button}
          onClick={setSoftskills}
        >
          оценка Softskills
        </Button>
        <Button
          style={
            !hardSkills
              ? { backgroundColor: "grey", color: "white", borderColor: "grey" }
              : {
                  backgroundColor: "orange",
                  color: "white",
                  borderColor: "orange",
                }
          }
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
          height: "7%",
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
