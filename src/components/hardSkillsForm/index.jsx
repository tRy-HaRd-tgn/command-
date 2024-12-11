import styles from "./styles.module.scss";
import { arrowRight } from "../../assets";
export const HardSkillsForm = (props) => {
  return (
    <div
      style={{
        width: "40%",
        height: "80%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className={styles.container}></div>
      <img
        style={{
          cursor: "pointer",
          marginLeft: "1%",
          width: "5vh",
          height: "5vh",
        }}
        src={arrowRight}
        alt="error"
      />
    </div>
  );
};
