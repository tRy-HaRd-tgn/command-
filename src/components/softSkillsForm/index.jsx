import styles from "./styles.module.scss";
import { SoftSkillQuestion } from "../softSkillQuestion";
import { data } from "./data";
import { arrowRight } from "../../assets";
import { useState } from "react";
export const SoftSkillsForm = ({
  array,
  setSoftResults,
  setArray,
  setSoftskills,
}) => {
  return (
    <div style={{ width: "auto", display: "flex", alignItems: "center" }}>
      <div className={styles.container}>
        <h2 className={styles.h2}>
          Какой вклад я могу внести в работу команды?
        </h2>
        {data.map((value, index) => (
          <SoftSkillQuestion
            state={array[index]}
            setState={(e) => {
              console.log(e);
              let tempArray = [];
              tempArray.push.apply(tempArray, array);
              tempArray[index] = e;
              setArray(tempArray);
            }}
            key={index}
            style={{ marginLeft: "1%" }}
            text={index + 1 + ". " + value}
          />
        ))}
      </div>
      <img
        style={{
          cursor: "pointer",
          marginLeft: "1%",
          width: "5vh",
          height: "5vh",
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
