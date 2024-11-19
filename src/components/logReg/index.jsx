import styles from "./styles.module.scss";
import { Button } from "../button";
import { useState } from "react";
export const LogReg = ({ register, state, children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [thirdName, setThirdName] = useState("");
  return (
    <>
      {!state ? (
        <form
          onSubmit={(e) => e.preventDefault()}
          className={styles.form}
          action=""
        >
          <p className={styles.form_p}>вход</p>
          <input
            placeholder={"login"}
            className={styles.form_input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder={"password"}
            className={styles.form_input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className={styles.form_button}>логин</Button>
          <p className={styles.form_description}>
            нет аккаунта?{" "}
            <span
              onClick={() => register()}
              style={{ color: "orange", cursor: "pointer" }}
            >
              регистрация
            </span>
          </p>
        </form>
      ) : (
        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          <p className={styles.form_p}>регистрация</p>
          <input
            className={styles.form_input}
            style={{ height: "6%" }}
            placeholder={"Фамилия"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className={styles.form_input}
            style={{ height: "6%" }}
            placeholder={"Имя"}
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          ></input>
          <input
            className={styles.form_input}
            style={{ height: "6%" }}
            placeholder={"Отчество"}
            value={thirdName}
            onChange={(e) => setThirdName(e.target.value)}
          ></input>
          <div className={styles.form_checkboxes}>
            <input
              className={styles.form_checkboxes__input}
              type="checkbox"
              onClick={() => {
                var checkbox = document.getElementById("checkbox2");
                checkbox.checked = false;
              }}
              id="checkbox1"
            />
            <p className={styles.form_checkboxes_description}>Работаю</p>
            <input
              className={styles.form_checkboxes__input}
              type="checkbox"
              id="checkbox2"
              onClick={() => {
                var checkbox = document.getElementById("checkbox1");
                checkbox.checked = false;
              }}
            />
            <p className={styles.form_checkboxes_description}>Учусь</p>
          </div>
          <input
            className={styles.form_input}
            style={{ height: "6%" }}
            placeholder={"Место работы/учебы"}
          ></input>
          <input
            className={styles.form_input}
            style={{ height: "6%", borderColor: "orange" }}
            placeholder={"email"}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <input
            className={styles.form_input}
            style={{ height: "6%", borderColor: "orange" }}
            placeholder={"password"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <Button className={styles.form_button}>регистрация</Button>
          <p className={styles.form_description} onClick={() => register()}>
            Уже есть аккаунт ?{" "}
            <span style={{ color: "orange", cursor: "pointer" }}>логин</span>
          </p>
        </form>
      )}
    </>
  );
};
