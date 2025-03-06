import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { arrowLeft, arrowRight } from "../../assets";
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
export const ResultSoftSkillsSecond = ({
  props,
  setSoftResultsSecond,
  setSoftResults,
}) => {
  const [role, setRole] = useState("1");
  const softSkills = useSelector((state) => state.user.softSkillInfo);
  const primaryRole = useSelector((state) => state.user.secondRole);
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
      <img
        style={{
          cursor: "pointer",
          marginLeft: "1%",
          width: "5vh",
          height: "5vh",
        }}
        onClick={() => {
          setSoftResultsSecond(false);
          setSoftResults(true);
        }}
        src={arrowLeft}
        alt="error"
      />
      <div className={styles.container}>
        <h2>Второстепенная роль в команде</h2>
        <div className={styles.role_container}>
          <h1 style={{ color: "orange" }}>{role}</h1>
        </div>
        <div className={styles.states}>
          <h2 className={styles.h2}>Краткое описание:</h2>
          <p>{softSkills.softSkillSecondary.briefDescription}</p>
          <h2 className={styles.h2}>Сильные стороны:</h2>
          <p>{softSkills.softSkillSecondary.strengths}</p>
          <h2 className={styles.h2}>Слабые стороны:</h2>
          <p>{softSkills.softSkillSecondary.weaknesses}</p>
          <h2 className={styles.h2}>Вклад в комманду:</h2>
          <p>{softSkills.softSkillSecondary.contribution}</p>
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
          setSoftResultsSecond(false);
        }}
        src={arrowRight}
        alt="error"
      />
    </div>
  );
};
