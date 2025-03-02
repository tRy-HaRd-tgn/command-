import styles from "./styles.module.scss";
import { data } from "./data";
import { arrowRight } from "../../assets";
import { TestComponent } from "../testComponent";

export const SoftSkillsForm = ({ setSoftResults, setSoftskills }) => {
  return (
    <div
      style={{
        width: "70%",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div className={styles.container}>
        <div className={styles.testWrapper}>
          {data.map((value, index) => (
            <>
              <h2 className={styles.h2}>{value.header}</h2>
              <TestComponent key={index} data={value.questions} />
            </>
          ))}
        </div>
      </div>
      <img
        style={{
          cursor: "pointer",
          marginLeft: "1%",
          width: "7vh",
        }}
        onClick={() => {
          setSoftskills(false);
          setSoftResults(true);
        }}
        src={arrowRight}
        alt="error"
      />
    </div>
  );
};
