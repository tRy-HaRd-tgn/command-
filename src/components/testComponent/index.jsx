import { SoftSkillQuestion } from "../softSkillQuestion";
import { useEffect, useState } from "react";
export const TestComponent = ({
  data,
  setExecutor,
  setChairman,
  setShaper,
  setThinker,
  setScout,
  setEvaluating,
  setCollectivist,
  setFinisher,
  executor,
  chairman,
  shaper,
  thinker,
  scout,
  evaluating,
  collectivist,
  finisher,
}) => {
  const [array, setArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    setSum(array.reduce((a, b) => a + b));
  }, [array]);
  const arraySetter = [
    setExecutor,
    setChairman,
    setShaper,
    setThinker,
    setScout,
    setEvaluating,
    setCollectivist,
    setFinisher,
  ];
  const arrayState = [
    executor,
    chairman,
    shaper,
    thinker,
    scout,
    evaluating,
    collectivist,
    finisher,
  ];

  return (
    <>
      {data.map((value, index) => (
        <SoftSkillQuestion
          sum={sum}
          setSum={setSum}
          state={array[index]}
          setter={arraySetter[index]}
          setterState={arrayState[index]}
          setState={(e) => {
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
    </>
  );
};
