import styles from "./styles.module.scss";
import { ProgressBar } from "../progressBar";
import { useEffect, useState } from "react";
export const SoftSkillQuestion = ({ text, style, state, setState, sum }) => {
  const [t, setT] = useState(0);
  useEffect(() => {
    setState(t);
  }, [t]);
  return (
    <div className={styles.container} style={style}>
      <h3 className={styles.h3}>{text}</h3>
      <div style={{ height: "5%" }}>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <ProgressBar state={state} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {...new Array(11).fill(0).map((value, index) => (
            <span
              className={styles.index}
              key={index}
              onClick={(e) => {
                if (t == index) {
                  setT(0);
                  console.log(1);
                  return;
                }
                if (sum - t + index <= 10) {
                  setT(index);
                  console.log(2);
                }

                if (index + sum > 10) {
                  setT(10 - sum);
                  console.log(3);
                }
              }}
            >
              {index}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
