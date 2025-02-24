import styles from "./styles.module.scss";
import { Button } from "../button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "../input";
export const LogReg = ({ register, state, children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [thirdName, setThirdName] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const setAuth = (value) => {
    dispatch({ type: "SET_AUTH", isAuth: value });
  };
  return (
    <>
      {!state ? (
        <form
          onSubmit={(e) => e.preventDefault()}
          className={styles.form}
          style={{ border: "none" }}
          action=""
        >
          <p className={styles.form_p}>вход</p>
          <>
            <Input
              style={{
                height: "8%",
                width: "80%",
                fontSize: "335%",
                paddingLeft: "2%",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              placeholder={"почта"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              style={{
                height: "8%",
                width: "80%",
                paddingLeft: "2%",
                fontSize: "335%",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              className={styles.form_input}
              placeholder={"пароль"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
          <Button
            onClick={() => {
              setAuth(true);
            }}
            className={styles.form_button}
          >
            логин
          </Button>
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
        <>
          <form
            style={{ border: "none" }}
            onSubmit={(e) => e.preventDefault()}
            className={styles.form}
          >
            <p className={styles.form_p}>регистрация</p>
            <Input
              style={{
                height: "8%",
                width: "80%",
                paddingLeft: "2%",
                fontSize: "335%",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              placeholder={"Фамилия"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              style={{
                height: "8%",
                width: "80%",
                paddingLeft: "2%",
                fontSize: "335%",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              placeholder={"Имя"}
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
            <Input
              style={{
                height: "8%",
                width: "80%",
                paddingLeft: "2%",
                fontSize: "335%",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              placeholder={"Отчество"}
              value={thirdName}
              onChange={(e) => setThirdName(e.target.value)}
            />
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
            <Input
              className={styles.form_input}
              style={{
                height: "8%",
                width: "80%",
                paddingLeft: "2%",
                fontSize: "335%",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              placeholder={"Место работы/учебы"}
            />
            <Input
              style={{
                height: "8%",
                width: "80%",
                paddingLeft: "2%",
                fontSize: "335%",
                border: "1px solid orange",
                borderRadius: "10px",
              }}
              placeholder={"почта"}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              style={{
                height: "8%",
                width: "80%",
                paddingLeft: "2%",
                fontSize: "335%",
                border: "1px solid orange",
                borderRadius: "10px",
              }}
              placeholder={"пароль"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className={styles.form_button}>регистрация</Button>
            <p className={styles.form_description} onClick={() => register()}>
              Уже есть аккаунт ?{" "}
              <span style={{ color: "orange", cursor: "pointer" }}>логин</span>
            </p>
          </form>
        </>
      )}
    </>
  );
};
