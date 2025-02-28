import styles from "./styles.module.scss";
import { Header } from "../../components";
import { useState } from "react";
import { Input } from "../../components";
import { Button } from "../../components";
import { arrowRight } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import putin from "../../assets/putin.jpg";
import AuthService from "../../service/AuthService";
export const ProfilePage1 = (props) => {
  const navigator = useNavigate();
  const [profileImg, setProfileImg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [university, setUniversity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [thirdName, setThirdName] = useState("");
  useEffect(() => {});
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.profileInfo}>
        <h1 className={styles.profileInfo__title}>Профиль</h1>
        <div className={styles.profileInfo__content}>
          <div className={styles.profileInfo__person}>
            <img
              style={{ width: "100%", height: "100%", borderRadius: "15px" }}
              src={putin}
              alt="error"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "calc(70%)",
            }}
          >
            <form className={styles.profileInfo__form} action="">
              <Input
                style={{
                  height: "6%",
                  fontSize: "135%",
                  borderRadius: "10px",
                  border: "1px solid black",
                  paddingLeft: "2%",
                }}
                placeholder={"имя"}
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                style={{
                  height: "6%",
                  fontSize: "135%",
                  borderRadius: "10px",
                  border: "1px solid black",
                  paddingLeft: "2%",
                }}
                placeholder={"фамилия"}
                type="text"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
              />
              <Input
                style={{
                  height: "6%",
                  fontSize: "135%",
                  borderRadius: "10px",
                  border: "1px solid black",
                  paddingLeft: "2%",
                }}
                placeholder={"отчество"}
                type="text"
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
                style={{
                  height: "6%",
                  fontSize: "135%",
                  borderRadius: "10px",
                  border: "1px solid black",
                  paddingLeft: "2%",
                }}
                placeholder={"университет/место работы"}
                type="text"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
              <Input
                style={{
                  height: "6%",
                  fontSize: "135%",
                  borderRadius: "10px",
                  border: "1px solid orange",
                  paddingLeft: "2%",
                }}
                placeholder={"почта"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                style={{
                  height: "6%",
                  fontSize: "135%",
                  borderRadius: "10px",
                  border: "1px solid orange",
                  paddingLeft: "2%",
                }}
                placeholder={"пароль"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{ marginLeft: "0" }}
                  className={styles.form_button}
                >
                  сохранить
                </Button>
                <Button
                  style={{ marginLeft: "0" }}
                  className={styles.form_button}
                  onClick={() => {
                    const responce = AuthService.logout();
                    console.log(responce);
                  }}
                >
                  выйти
                </Button>
              </div>
            </form>
          </div>
          <div className={styles.profileInfo__divArrow}>
            <img
              className={styles.navArrow}
              src={arrowRight}
              alt=""
              onClick={() => navigator("/profile2")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
