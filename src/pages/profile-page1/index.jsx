import styles from "./styles.module.scss";
import { Header, Input, Button } from "../../components";
import { useState } from "react";
import { arrowRight } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import profile from "../../assets/profile.png";
import AuthService from "../../service/AuthService";
import UserService from "../../service/UserService";
import { useDispatch } from "react-redux";
export const ProfilePage1 = (props) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);
  const surname = useSelector((state) => state.user.surname);
  const patronymic = useSelector((state) => state.user.patronymic);
  const university2 = useSelector((state) => state.user.university);
  const employmentStatus = useSelector((state) => state.user.employmentStatus);
  const studyDirection = useSelector((state) => state.user.studyDirection);
  const picture = useSelector((state) => state.user.profilePicture);
  const appointment = useSelector((state) => state.user.appointment);
  const navigator = useNavigate();
  const [profileImg, setProfileImg] = useState("");
  const [university, setUniversity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [thirdName, setThirdName] = useState("");
  const [loading, setLoading] = useState(true);
  const [employmentStatus2, setEmploymentStatus] = useState("");
  const saveSoftResults = (value) => {
    dispatch({ type: "SET_SOFT_SKILL_INFO", softSkillInfo: value });
  };
  async function configureTest() {
    try {
      const responce = await UserService.getSoftSkillInfo();
      saveSoftResults(responce.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    setFirstName(name);
    setSecondName(surname);
    setThirdName(patronymic);
    setUniversity(university2);
    setProfileImg(picture);
    setEmploymentStatus(employmentStatus);
    try {
      configureTest();
    } catch (e) {
      console.log(e);
    }
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  return (
    <>
      {!loading ? (
        <div className={styles.container}>
          <Header />
          <div className={styles.profileInfo}>
            <h1 className={styles.profileInfo__title}>Профиль</h1>
            <div className={styles.profileInfo__content}>
              <div
                className={styles.profileInfo__person}
                onClick={(e) => {
                  let input = document.querySelector("#fileInput");
                  input.click();
                }}
              >
                <img
                  className={styles.profilePicture}
                  src={!profileImg ? profile : profileImg}
                  alt="ошибка"
                />
                <input
                  id="fileInput"
                  accept="image/*"
                  className={styles.fileInput}
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    try {
                      const responce = UserService.updateAvatar(file);
                      setProfileImg(URL.createObjectURL(file));
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                ></input>
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
                        setEmploymentStatus("WORKS");
                      }}
                      checked={employmentStatus2 === "WORKS"}
                      id="checkbox1"
                    />
                    <p className={styles.form_checkboxes_description}>
                      Работаю
                    </p>
                    <input
                      className={styles.form_checkboxes__input}
                      type="checkbox"
                      id="checkbox2"
                      onClick={() => {
                        var checkbox = document.getElementById("checkbox1");
                        checkbox.checked = false;
                        setEmploymentStatus("STUDY");
                      }}
                      checked={employmentStatus2 === "STUDY"}
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
                      onClick={(e) => {
                        e.preventDefault();
                        try {
                          const responce = UserService.updateProfile(
                            secondName,
                            firstName,
                            thirdName,
                            university,
                            employmentStatus2,
                            false,
                            studyDirection,
                            appointment
                          );
                          window.location.reload();
                        } catch (e) {
                          console.log(e);
                        }
                      }}
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
      ) : (
        <></>
      )}
    </>
  );
};
