import styles from "./styles.module.scss";
import { Button } from "../button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "../input";
import AuthService from "../../service/AuthService";
import { useEffect } from "react";
export const LogReg = ({ register, state, children, modal, setModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [thirdName, setThirdName] = useState("");
  const [place, setPlace] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [secError, setSecError] = useState(false);
  const [ok, setOk] = useState(false);
  const [appointment, setAppointment] = useState("");
  const [studyDirection, setStudyDirection] = useState("");
  const setAuth = (value) => {
    dispatch({ type: "SET_AUTH", softSkillInfo: value });
  };
  useEffect(() => {
    setEmploymentStatus("");
  }, []);
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
            onClick={async () => {
              try {
                const responce = await AuthService.login(email, password);
                setAuth(true);
                window.location.reload();
              } catch (e) {
                setError("Ошибка авторизации");
              }
            }}
            className={styles.form_button}
          >
            логин
          </Button>
          {error ? <p className={styles.error}>{error}</p> : <></>}
          <p className={styles.form_description}>
            нет аккаунта?{" "}
            <span
              onClick={() => {
                register();
                setError(false);
                setSecError(false);
                setOk(false);
                let checkbox2 = document.getElementById("checkbox2");
                let checkbox1 = document.getElementById("checkbox1");
                if (employmentStatus == "WORKS") {
                  checkbox1.checked = true;
                }
                if (employmentStatus == "STUDY") {
                  checkbox2.checked = true;
                }
              }}
              style={{ color: "orange", cursor: "pointer" }}
            >
              регистрация
            </span>
          </p>
          <p className={styles.form_description}>
            <span
              onClick={(e) => {
                setModal(!modal);
              }}
              style={{ color: "orange", cursor: "pointer" }}
            >
              забыли пароль ?
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
            <Input
              style={{
                height: "8%",
                width: "80%",
                paddingLeft: "2%",
                fontSize: "335%",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              placeholder={"Должность/академическая группа/класс"}
              value={appointment}
              onChange={(e) => setAppointment(e.target.value)}
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
              placeholder={"Направление обучения"}
              value={studyDirection}
              onChange={(e) => setStudyDirection(e.target.value)}
            />
            <div className={styles.form_checkboxes}>
              <input
                className={styles.form_checkboxes__input}
                type="checkbox"
                onClick={() => {
                  var checkbox = document.getElementById("checkbox2");
                  checkbox.checked = false;
                  setEmploymentStatus("WORKS");
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
                  setEmploymentStatus("STUDY");
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
              value={place}
              onChange={(e) => setPlace(e.target.value)}
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
              placeholder={"Почта"}
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
              placeholder={"Пароль"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              onClick={async () => {
                try {
                  const responce = await AuthService.register(
                    email,
                    name,
                    secondName,
                    thirdName,
                    place,
                    employmentStatus,
                    password,
                    password,
                    studyDirection,
                    appointment
                  );
                  setSecError("");
                  setOk(true);
                  setTimeout(() => {
                    register();
                  }, 5000);
                } catch (e) {
                  console.log(e);
                  setSecError(e.response.data.message);
                  setOk(false);
                }
              }}
              className={styles.form_button}
            >
              регистрация
            </Button>
            {secError ? <p className={styles.secError}>{secError}</p> : <></>}
            {ok ? (
              <p className={styles.error}>
                Подтвердите создание в почтовом ящике
              </p>
            ) : (
              <></>
            )}
            <p
              className={styles.form_description}
              onClick={() => {
                register();
                setError(false);
                setSecError(false);
                setEmploymentStatus("");
              }}
            >
              Уже есть аккаунт ?{" "}
              <span style={{ color: "orange", cursor: "pointer" }}>логин</span>
            </p>
          </form>
        </>
      )}
    </>
  );
};
