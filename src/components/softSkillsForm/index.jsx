import styles from "./styles.module.scss";
import { data } from "./data";
import { arrowRight } from "../../assets";
import { TestComponent } from "../testComponent";
import { useEffect, useState } from "react";
import { ModalIcon } from "../modalIcon";
import { text } from "./data";

export const SoftSkillsForm = ({ setSoftResults, setSoftskills }) => {
  const [modal, setModal] = useState(false);
  const [state, setState] = useState(false);
  const [executor, setExecutor] = useState(0);
  const [chairman, setChairman] = useState(0);
  const [shaper, setShaper] = useState(0);
  const [thinker, setThinker] = useState(0);
  const [scout, setScout] = useState(0);
  const [evaluating, setEvaluating] = useState(0);
  const [collectivist, setCollectivist] = useState(0);
  const [finisher, setFinisher] = useState(0);
  const [vote, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const [sendArray, setSendArray] = useState([
    executor,
    chairman,
    shaper,
    thinker,
    scout,
    evaluating,
    collectivist,
    finisher,
  ]);
  useEffect(() => {
    setSendArray([
      executor,
      chairman,
      shaper,
      thinker,
      scout,
      evaluating,
      collectivist,
      finisher,
    ]);
  }, [
    executor,
    chairman,
    shaper,
    thinker,
    scout,
    evaluating,
    collectivist,
    finisher,
  ]);

  return (
    <>
      <ModalIcon
        state={state}
        setState={setState}
        active={modal}
        setActive={setModal}
      >
        <div className={styles.modalContent}>
          <span className={styles.modalContentText}>{text}</span>
        </div>
      </ModalIcon>
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
            <button
              onClick={() => setModal(true)}
              className={styles.formButton}
            >
              Описание
            </button>
            {data.map((value, index) => (
              <>
                <h2 className={styles.h2}>
                  {value.header} <span>{vote[index]}/ 10</span>
                </h2>
                <TestComponent
                  setVotes={setVotes}
                  votes={vote}
                  executor={executor}
                  chairman={chairman}
                  shaper={shaper}
                  thinker={thinker}
                  scout={scout}
                  evaluating={evaluating}
                  collectivist={collectivist}
                  finisher={finisher}
                  setExecutor={setExecutor}
                  setChairman={setChairman}
                  setShaper={setShaper}
                  setThinker={setThinker}
                  setScout={setScout}
                  setEvaluating={setEvaluating}
                  setCollectivist={setCollectivist}
                  setFinisher={setFinisher}
                  key={index}
                  index={index}
                  data={value.questions}
                />
              </>
            ))}
            <button
              onClick={() => {
                console.log(sendArray);
              }}
              className={styles.formButtonBottom}
            >
              Получить результат
            </button>
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
    </>
  );
};
