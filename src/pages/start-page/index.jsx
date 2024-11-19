import styles from "./styles.module.scss";
import { Header, ModalIcon } from "../../components";
import { phone } from "../../assets";
import { useState } from "react";
import { Button } from "../../components";
import { SassColor } from "sass";
export const StartPage = (props) => {
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState(false); // state is neccessery for the choise of the two forms for the login and register
  const register = () => {
    setState(true);
  };
  return (
    <>
      <Header active={active} setActive={setActive} />
      <ModalIcon
        state={state}
        setState={setState}
        setActive={setActive}
        active={active}
      >
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder={"password"}
              className={styles.form_input}
              type="password"
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
          <></>
        )}
      </ModalIcon>
      <div className={styles.container}>
        <div className={styles.container__img}>
          <div className={styles.container_extended}>
            <p className={styles.container_extended__p}>
              Никто из вас так не умен, как все мы вместе
            </p>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <img className={styles.footer__img} src={phone} alt="error" />
      </footer>
    </>
  );
};
