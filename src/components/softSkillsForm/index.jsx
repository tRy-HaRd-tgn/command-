import styles from "./styles.module.scss";
import { data } from "./data";
import { TestComponent } from "../testComponent";
import { useEffect, useState } from "react";
import { ModalIcon } from "../modalIcon";
import { text } from "./data";
import TestService from "../../service/TestService";
import { roles } from "./data";
import { useDispatch } from "react-redux";

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
  const [error, setError] = useState("");
  const [success, setSuccess] = useState();

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
          <h2>Описание</h2>
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
            {error ? (
              <p style={{ color: "red" }} className={styles.msg}>
                {error}
              </p>
            ) : (
              <></>
            )}
            {success ? (
              <p styles={{ color: "green" }} className={styles.msg}>
                {success}
              </p>
            ) : (
              <></>
            )}
            <button
              onClick={async () => {
                let obj = {};
                let keys = Object.keys(roles);

                for (let i = 0; i < sendArray.length; i++) {
                  obj[keys[i]] = sendArray[i];
                }
                const summery = vote.reduce((a, b) => a + b, 0);
                if (summery === 70) {
                  try {
                    const response = await TestService.belbinTest(obj);
                    setError("");
                    setSuccess("тест пройден успешно");
                    setTimeout(async () => {
                      window.location.reload();
                    }, 5000);
                  } catch (e) {
                    setError(e.response.data.message);
                    setSuccess("");
                  }
                } else {
                  setError("потрачены не все очки");
                  setSuccess("");
                }
              }}
              className={styles.formButtonBottom}
            >
              Получить результат
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
