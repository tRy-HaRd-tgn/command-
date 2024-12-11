import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
export const ProgressBar = ({ state }) => {
  const [filled, setField] = useState(0);
  const [loading, setLoading] = useState(0);
  useEffect(() => {
    setField(state * 10);
  }, [state]);
  return (
    <body style={{ backgroundColor: "black" }}>
      <div className={styles.progressbar}>
        <div
          style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: "orange",
            transition: `width 0.5s`,
          }}
        ></div>
        <span className={styles.progressBarPercentage}>{filled}%</span>
      </div>
    </body>
  );
};
