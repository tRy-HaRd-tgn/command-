import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { arrowRight } from "../../assets";
import { useSelector } from "react-redux";
const obj = {
  EXECUTOR: "исполнитель",
  CHAIRMAN: "председатель",
  SHAPER: "формирователь",
  THINKER: "мыслитель",
  SCOUT: "разведчик",
  EVALUATING: "оценщик",
  COLLECTIVIST: "коллективист",
  FINISHER: "доводящий до конца",
};
export const ResultSoftSkills = ({ setSoftResultsSecond, setSoftResults }) => {
  const [role, setRole] = useState("1");
  const softSkills = useSelector((state) => state.user.softSkillInfo);
  const primaryRole = useSelector((state) => state.user.firstRole);

  useEffect(() => {
    setRole(obj[primaryRole]);
  }, []);
  return (
    <div
      style={{
        width: "40%",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className={styles.container}>
        <h2>Преобладающая роль в команде</h2>
        <div className={styles.role_container}>
          <h1 style={{ color: "orange" }}>{role}</h1>
        </div>
        <div className={styles.states}>
          <h2 className={styles.h2}>Краткое описание:</h2>
          <p>{softSkills.softSkill.briefDescription}</p>
          <h2 className={styles.h2}>Сильные стороны:</h2>
          <p>{softSkills.softSkill.strengths}</p>
          <h2 className={styles.h2}>Слабые стороны:</h2>
          <p>{softSkills.softSkill.weaknesses}</p>
          <h2 className={styles.h2}>Вклад в комманду:</h2>
          <p>{softSkills.softSkill.contribution}</p>
        </div>
      </div>
      <img
        style={{
          cursor: "pointer",
          marginLeft: "1%",
          width: "5vh",
          height: "5vh",
        }}
        onClick={() => {
          setSoftResultsSecond(true);
          setSoftResults(false);
        }}
        src={arrowRight}
        alt="error"
      />
    </div>
  );
};
