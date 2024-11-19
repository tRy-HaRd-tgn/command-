import styles from "./styles.module.scss";
import { Header, ModalIcon } from "../../components";
import { phone } from "../../assets";
import { useState } from "react";
import { Button } from "../../components";
import { SassColor } from "sass";
import { LogReg } from "../../components/logReg";
export const StartPage = (props) => {
  const [active, setActive] = useState(false);
  const [state, setState] = useState(false); // state is neccessery for the choise of the two forms for the login and register
  const register = () => {
    setState(!state);
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
        <LogReg register={register} state={state} />
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
