import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { arrowRight } from "../../assets";
import { ProgressBar } from "../progressBar";
export const ResultSoftSkills = ({ props,setSoftResultsSecond }) => {
  const [role, setRole] = useState("1");
  const [description, setDescription] = useState("2");
  const [strongStates, setStrongStates] = useState("3");
  const [weakStates, setWeakStates] = useState("4");
  const [teamContribution, setTeamContribution] = useState("5");
  const [percentage, setPercentage] = useState(1);
  useEffect(() => {}, []);
  return (
    <div
      style={{
        width: "40%",
        height: "80%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className={styles.container}>
        <h2>Преобладающая роль в команде</h2>
        <div className={styles.role_container}>
          <h1 style={{ color: "orange" }}>{role}</h1>
          <div style={{ width: "50%" }}>
            <ProgressBar
              style={{
                height: "25px",
                borderRadius: "20px",
                position: "relative",
              }}
              active={true}
              state={percentage}
            />
          </div>
        </div>
        <div className={styles.states}>
          <h2 className={styles.h2}>Краткое описание:</h2>
          <p>{description}</p>
          <h2 className={styles.h2}>Сильные стороны:</h2>
          <p>{strongStates}</p>
          <h2 className={styles.h2}>Слабые стороны:</h2>
          <p>{weakStates}</p>
          <h2 className={styles.h2}>Вклад в комманду:</h2>
          <p>{teamContribution}</p>
        </div>
      </div>
      <img
        style={{
          cursor: "pointer",
          marginLeft: "1%",
          width: "5vh",
          height: "5vh",
        }}
        onClick={() => setSoftResultsSecond(true)}
        src={arrowRight}
        alt="error"
      />
    </div>
  );
};
