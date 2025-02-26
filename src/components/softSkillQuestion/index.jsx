import styles from "./styles.module.scss";
import { ProgressBar } from "../progressBar";
import { useEffect, useState } from "react";
export const SoftSkillQuestion = ({ text, style, state, setState }) => {
  const [t, setT] = useState(0);
  useEffect(() => {
    setState(t);
  }, [t]);
  return (
    <div className={styles.container} style={style}>
      <h3 className={styles.h3}>{text}</h3>
      <div style={{ height: "5%" }}>
        <ProgressBar state={state} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          {...new Array(11).fill(0).map((value, index) => (
            <span
              className={styles.index}
              key={index}
              onClick={() => setT(index)}
            >
              {index}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
