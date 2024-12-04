import styles from "./styles.module.scss";
import { Header, Button, Input } from "../../components";
import { arrowRight, arrowLeft } from "../../assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const ProfilePage2 = (props) => {
  const [group, setGroup] = useState("");
  const [direction, setDirection] = useState("");
  const [project, setProject] = useState("");
  const navigator = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <header>
          <Header />
        </header>
        <div className={styles.container__content}>
          <div className={styles.container__content__info}>
            <h2 className={styles.h2}>Профиль</h2>
            <div className={styles.divNav}>
              <img
                onClick={() => {
                  navigator("/");
                }}
                className={styles.arrow}
                src={arrowLeft}
                alt=""
              />
              <div className={styles.container__content__info__flex}>
                <div className={styles.container__content__info__flex__inputs}>
                  <Input
                    style={{
                      height: "29%",
                      fontSize: "135%",
                    }}
                    placeholder={"должность/академическая группа"}
                    type="text"
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}
                  />
                  <Input
                    style={{
                      height: "29%",
                      fontSize: "135%",
                    }}
                    placeholder={"направление обучения"}
                    type="text"
                    value={direction}
                    onChange={(e) => setDirection(e.target.value)}
                  />
                </div>
                <div className={styles.buttons_wrapper}>
                  <Button className={styles.form_button}>
                    оценка Softskills
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      borderColor: "grey",
                    }}
                    className={styles.form_button}
                  >
                    оценка Hardskills
                  </Button>
                  <Input
                    style={{
                      height: "100%",
                      margin: "0",
                      paddingTop: "1.1%",
                      paddingBottom: "1.1%",
                      paddingRight: "0.65%",
                      fontSize: "135%",
                    }}
                    placeholder={"предложить проект"}
                    type="text"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                  />
                </div>
                <Button
                  style={{
                    height: "7%",
                    width: "24%",
                    textAlign: "center",
                    fontSize: "calc(125% / 1.2)",
                    marginLeft: "8%",
                  }}
                  className={styles.form_button}
                >
                  сохранить
                </Button>
              </div>
              <img className={styles.arrow} src={arrowRight} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
