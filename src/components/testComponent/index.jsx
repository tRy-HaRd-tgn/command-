import { SoftSkillQuestion } from "../softSkillQuestion";
import { useEffect, useState } from "react";
export const TestComponent = ({ data }) => {
  const [array, setArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    setSum(array.reduce((a, b) => a + b));
  }, [array]);
  return (
    <>
      {data.map((value, index) => (
        <SoftSkillQuestion
          sum={sum}
          setSum={setSum}
          state={array[index]}
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
