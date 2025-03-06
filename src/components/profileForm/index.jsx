import styles from "./styles.module.scss";
import { Button, Input } from "../../components";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import UserService from "../../service/UserService";
import { useNavigate } from "react-router-dom";
export const ProfileForm = ({
  softSkills,
  hardSkills,
  setHardskills,
  setSoftskills,
  softResults,
  hardResults,
  softResultsSecond,
  setSoftResults,
  softSkillsResult,
}) => {
  console.log(softSkillsResult);
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
  const appointment = useSelector((state) => state.user.appointment);
  const studyDirection = useSelector((state) => state.user.studyDirection);
  const firstName = useSelector((state) => state.user.name);
  const secondName = useSelector((state) => state.user.surname);
  const thirdName = useSelector((state) => state.user.patronymic);
  const university = useSelector((state) => state.user.university);
  const employmentStatus = useSelector((state) => state.user.employmentStatus);
  useEffect(() => {
    setGroup(appointment);
    setDirection(studyDirection);
  }, []);
  const router = useNavigate();
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
          onClick={async (e) => {
            try {
              const responce = await UserService.updateProfile(
                secondName,
                firstName,
                thirdName,
                university,
                employmentStatus,
                false,
                direction,
                group
              );
              window.location.reload();
            } catch (e) {
              console.log(e);
            }
          }}
        >
          сохранить
        </Button>
        {softSkillsResult ? (
          <div className={styles.buttonsWrapper}>
            <Button
              style={
                softSkills
                  ? { backgroundColor: "orange" }
                  : { backgroundColor: "grey" }
              }
              className={styles.form_buttonHalf}
              onClick={setSoftskills}
            >
              оценка Softskills
            </Button>
            <Button
              style={
                softResults || softResultsSecond
                  ? { backgroundColor: "orange" }
                  : { backgroundColor: "grey" }
              }
              className={styles.form_buttonHalf}
              onClick={setSoftResults}
            >
              результаты
            </Button>
          </div>
        ) : (
          <Button
            style={styleDefiner(1)}
            className={styles.form_button}
            onClick={setSoftskills}
          >
            оценка Softskills
          </Button>
        )}
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
          onClick={(e) => router("/projectRequest")}
        >
          предложить проект
        </Button>
      </div>
    </div>
  );
};
