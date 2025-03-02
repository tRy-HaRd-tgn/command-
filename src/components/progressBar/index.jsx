import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
export const ProgressBar = ({ state, style, active }) => {
  const [filled, setField] = useState(0);
  const [loading, setLoading] = useState(0);
  useEffect(() => {
    setField(state * 10);
  }, [state]);
  return (
    <body
      style={
        !style
          ? { backgroundColor: "black", width: "90%" }
          : { border: "1px solid orange", borderRadius: "20px", width: "90%" }
      }
    >
      <div className={styles.progressbar} style={style}>
        <div
          style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: "orange",
            transition: `width 0.5s`,
          }}
        />
        <span
          style={
            active && {
              color: "black",
              position: "absolute",
              left: `${filled > 100 ? filled - 14 : filled}%`,
              top: "5%",
            }
          }
        ></span>
      </div>
    </body>
  );
};
