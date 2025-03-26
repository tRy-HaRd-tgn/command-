import styles from "./styles.module.scss";
import { Header } from "../../components";
import { telegram } from "../../assets";
import { phone2 } from "../../assets";
import { useEffect } from "react";
import { useState } from "react";
import UserService from "../../service/UserService";
export const ContactPage = (props) => {
  const [telegram2, setTelegram] = useState();
  const [mobile, setMobile] = useState();
  const [error, setError] = useState();
  const [result, setResult] = useState();
  useEffect(() => {
    try {
      setTimeout(async () => {
        const response = await UserService.getProfile();
        setTelegram(response.data.contacts.telegram);
        setMobile(response.data.contacts.phoneNumber);
      }, 300);
    } catch (e) {
      console.log(responce.data.error);
    }
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <img className={styles.img} src={telegram} alt="" />
        </div>
        <form className={styles.center}>
          <div className={styles.warning}>
            Предупреждение: без устрановленного телеграма и телефона, доступ к
            функционалу проектов будет ограничен
          </div>
          <label className={styles.label} htmlFor="telegram">
            телеграм
          </label>
          <input
            value={telegram2}
            onChange={(e) => {
              setTelegram(e.target.value);
            }}
            name="telegram"
            placeholder={"телеграм"}
            className={styles.input}
            type="telegram"
          />
          <label className={styles.label} htmlFor="mobile">
            телефон
          </label>
          <input
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            name="mobile"
            placeholder={"телефон"}
            className={styles.input}
            type="tel"
          />
          <button
            disabled={result}
            onClick={async () => {
              try {
                const responce = await UserService.updateContacts(
                  telegram2,
                  mobile
                );
                setError();
                setResult("Успешно");
                setTimeout(() => {
                  window.location.reload();
                }, 5000);
              } catch (e) {
                setResult();
                setError(e.response.data.message);
              }
            }}
            type="button"
            className={styles.btn}
          >
            Изменить
          </button>
          {error ? <p>{error}</p> : <></>}
          {result ? <p>{result}</p> : <></>}
        </form>
        <div className={styles.rightSide}>
          <img className={styles.img} src={phone2} alt="" />
        </div>
      </div>
    </div>
  );
};
