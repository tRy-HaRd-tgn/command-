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
    try {
      if (Object.keys(temp).length === 7) {
        let array = [];
        for (var key in temp) {
          if (temp[key] === 0) {
            array.push(0);
          } else {
            array.push(temp[key]);
          }
        }
        setValues(array);
      }
    } catch (e) {
      console.log(e);
    }
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
          {error ? <p className={styles.message}>{error}</p> : <></>}
          {success ? <p className={styles.message}>{success}</p> : <></>}
        </div>
        <button
          onClick={async () => {
            try {
              let obj = {};
              let keys = Object.keys(hardSkills);

              try {
                for (let i = 0; i < values.length; i++) {
                  if (values[i] != null) {
                    obj[keys[i]] = Number(values[i]);
                  } else {
                    obj[keys[i]] = 0;
                  }
                }
              } catch (e) {
                console.log(e);
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
      {/*
     <img
        style={{
          cursor: "pointer",
          marginLeft: "1%",
          width: "5vh",
          height: "5vh",
        }}
        src={arrowRight}
        alt="error"
      />*/}
    </div>
  );
};
