import styles from "./styles.module.scss";
import { Button } from "../button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "../input";
import { set, useForm } from "react-hook-form";
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
  const [checkBoxError, setCheckBoxError] = useState(false);
  const setAuth = (value) => {
    dispatch({ type: "SET_AUTH", softSkillInfo: value });
  };
  useEffect(() => {
    setEmploymentStatus("");
  }, []);
  useEffect(() => {
    if (!employmentStatus) {
      setCheckBoxError(true);
    } else {
      setCheckBoxError(false);
    }
  }, [employmentStatus]);
  const {
    register: registerS,
    handleSubmit: submit,
    formState: { errors },
  } = useForm();

  const registerSubmit = async (data, event) => {
    event.preventDefault();
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
                height: "150%",
                width: "100%",
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
                height: "150%",
                width: "100%",
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
            onSubmit={submit(registerSubmit)}
            className={styles.form}
          >
            <p className={styles.form_p}>регистрация</p>
            <Input
              style={{
                height: "100%",
                width: "100%",
                paddingLeft: "2%",
                fontSize: "335%",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              id="secondName"
              {...registerS("secondName", {
                required: "Фамилия обязательно",
                minLength: { value: 4, message: "4 символа минимум" },
                pattern: {
                  value: /^[А-ЯЁ][а-яё]*$/,
                  message: "Первая буква русская с большой",
                },
              })}
              placeholder={"Фамилия"}
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
            {errors.secondName && (
              <p className={styles.error}>{errors.secondName.message}</p>
            )}
            <Input
              style={{
                height: "100%",
                width: "100%",
                paddingLeft: "2%",
                fontSize: "335%",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              id="firstName"
              {...registerS("firstName", {
                required: "Имя обязательно",
                minLength: { value: 4, message: "4 символа минимум" },
                pattern: {
                  value: /^[А-ЯЁ][а-яё]*$/,
                  message: "Первая буква русская с большой",
                },
              })}
              placeholder={"Имя"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.firstName && (
              <p className={styles.error}>{errors.firstName.message}</p>
            )}
            <Input
              style={{
                height: "100%",
                width: "100%",
                paddingLeft: "2%",
                fontSize: "335%",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              id="trirdName"
              {...registerS("trirdName", {
                required: "Отчество обязательно",
                minLength: { value: 4, message: "4 символа минимум" },
                pattern: {
                  value: /^[А-ЯЁ][а-яё]*$/,
                  message: "Первая буква русская с большой",
                },
              })}
              placeholder={"Отчество"}
              value={thirdName}
              onChange={(e) => setThirdName(e.target.value)}
            />
            {errors.trirdName && (
              <p className={styles.error}>{errors.trirdName.message}</p>
            )}
            <Input
              style={{
                height: "100%",
                width: "100%",
                paddingLeft: "2%",
                fontSize: "335%",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              id="place"
              {...registerS("place", {
                required: "Поле обязательно к заполенению",
                minLength: { value: 3, message: "3 символа минимум" },
              })}
              placeholder={"Должность/академическая группа/класс"}
              value={appointment}
              onChange={(e) => setAppointment(e.target.value)}
            />
            {errors.place && (
              <p className={styles.error}>{errors.place.message}</p>
            )}
            <Input
              style={{
                height: "100%",
                width: "100%",
                paddingLeft: "2%",
                fontSize: "335%",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              id="studyDirection"
              {...registerS("studyDirection", {
                required: "Поле обязательно к заполенению",
                minLength: { value: 4, message: "4 символа минимум" },
              })}
              placeholder={"Направление обучения"}
              value={studyDirection}
              onChange={(e) => setStudyDirection(e.target.value)}
            />
            {errors.studyDirection && (
              <p className={styles.error}>{errors.studyDirection.message}</p>
            )}
            <div className={styles.form_checkboxes}>
              <input
                className={styles.form_checkboxes__input}
                type="checkbox"
                onClick={() => {
                  if (employmentStatus === "WORKS") {
                    setEmploymentStatus("");
                    return;
                  }

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
                  if (employmentStatus === "STUDY") {
                    setEmploymentStatus("");
                    return;
                  }
                  var checkbox = document.getElementById("checkbox1");
                  checkbox.checked = false;
                  setEmploymentStatus("STUDY");
                }}
              />
              <p className={styles.form_checkboxes_description}>Учусь</p>
            </div>
            {checkBoxError && (
              <p className={styles.error}>{"Выберите один из вариантов"}</p>
            )}
            <Input
              className={styles.form_input}
              style={{
                height: "100%",
                width: "100%",
                paddingLeft: "2%",
                fontSize: "335%",
                border: "1px solid black",
                borderRadius: "10px",
              }}
              id="studyPlace"
              {...registerS("studyPlace", {
                required: "Поле обязательно к заполенению",
                minLength: { value: 4, message: "4 символа минимум" },
              })}
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              placeholder={"Место работы/учебы"}
            />
            {errors.studyPlace && (
              <p className={styles.error}>{errors.studyPlace.message}</p>
            )}
            <Input
              style={{
                height: "100%",
                width: "100%",
                paddingLeft: "2%",
                fontSize: "335%",
                border: "1px solid orange",
                borderRadius: "10px",
              }}
              placeholder={"Почта"}
              id="email"
              {...registerS("email", {
                required: "Поле обязательно к заполенению",
                minLength: { value: 4, message: "4 символа минимум" },
              })}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
            <Input
              style={{
                height: "100%",
                width: "100%",
                paddingLeft: "2%",
                fontSize: "335%",
                border: "1px solid orange",
                borderRadius: "10px",
              }}
              id="password"
              placeholder={"Пароль"}
              type="password"
              eye={true}
              {...registerS("password", {
                required: "Поле обязательно к заполенению",
                minLength: { value: 8, message: "8 символов минимум" },
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+-=[\]{};':"\\|,.<>\/?~]).*$/,
                  message:
                    "Пароль должен содержать хотя бы одну заглавную букву, одну цифру и один специальный символ",
                },
              })}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p style={{ width: "70%" }} className={styles.error}>
                {errors.password.message}
              </p>
            )}
            <Button type="submit" className={styles.form_button}>
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
