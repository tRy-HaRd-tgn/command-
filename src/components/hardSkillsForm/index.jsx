import styles from "./styles.module.scss";
import { arrowRight } from "../../assets";
import { mas } from "./data/index";
import { useEffect, useState } from "react";
import { HardInput } from "../hardSkillInput";
import TestService from "../../service/TestService";
import { hardSkills } from "./data/index";
import { useSelector } from "react-redux";
export const HardSkillsForm = (props) => {
  // СТРИПУХА ДВА ЛИМУЗИНА ДВЕ БУТЫЛКИ ДЖИНА
  const [values, setValues] = useState(["", "", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const temp = useSelector((state) => state.user.hardSkillInfo);
  useEffect(() => {
    let array = [];
    for (var key in temp) {
      if (temp[key] === 0) {
        array.push("");
      } else {
        array.push(temp[key]);
      }
    }
    setValues(array);
  }, []);
  return (
    <div
      style={{
        width: "50%",
        height: "80%",
        display: "flex",
        alignItems: "center",
        marginBottom: "1%",
      }}
    >
      <div className={styles.container}>
        <h2 className={styles.h2}>
          Выберите из списка профессиональные компетенции и оцените уровень
          владения каждой из них 0/10
        </h2>
        <div className={styles.qustionsWrapper}>
          {mas.map((value, index) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <HardInput
                values={values}
                setValues={setValues}
                index={index}
                key={index}
              />
              <p>{value}</p>
            </div>
          ))}
          {error ? <p>{error}</p> : <></>}
          {success ? <p>{success}</p> : <></>}
          <button
            onClick={async () => {
              try {
                let obj = {};
                let keys = Object.keys(hardSkills);

                for (let i = 0; i < values.length; i++) {
                  obj[keys[i]] = Number(values[i]);
                }

                const response = await TestService.hardSkillsTest(obj);
                setSuccess("изменения успешно сохранены");
                setError(false);
                setTimeout(() => {
                  window.location.reload();
                }, 5000);
              } catch (e) {
                setError(e.response.data.message);
                setSuccess(false);
                console.log(e);
              }
            }}
            className={styles.button}
          >
            Сохранить
          </button>
        </div>
      </div>
      <img
        style={{
          cursor: "pointer",
          marginLeft: "1%",
          width: "5vh",
          height: "5vh",
        }}
        src={arrowRight}
        alt="error"
      />
    </div>
  );
};
