import styles from "./styles.module.scss";
import { Header, ModalIcon } from "../../components";
import { phone } from "../../assets";
import { useEffect, useState } from "react";
import { LogReg } from "../../components/logReg";
import { PasswordReset } from "../../components";
export const StartPage = (props) => {
  const [active, setActive] = useState(false); // state is neccessery for turn on amd off modal icon
  const [state, setState] = useState(false); // state is neccessery for the choise of the two forms for the login and register
  const [modal, setModal] = useState(false);
  const register = () => {
    setState(!state);
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {!loading ? (
        <>
          <Header active={active} setActive={setActive} mode={1} />
          <ModalIcon
            state={state}
            setState={setState}
            setActive={setActive}
            active={active}
          >
            <LogReg register={register} state={state} setModal={setModal} />
          </ModalIcon>
          <ModalIcon
            state={state}
            setState={setState}
            active={modal}
            setActive={setModal}
          >
            <PasswordReset
              state={state}
              setState={setState}
              active={modal}
              setActive={setModal}
            />
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
      ) : (
        <></>
      )}
    </>
  );
};
