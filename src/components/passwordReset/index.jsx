import styles from "./styles.module.scss";
import AuthService from "../../service/AuthService";
import { useState } from "react";
export const PasswordReset = ({ setActive }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className={styles.container}>
      <form className={styles.form} action="">
        <label htmlFor="input" className={styles.label}>
          <span>Для смены пароля</span>
          Введите почту
        </label>
        <input
          id="input"
          placeholder="Почта"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="input"
          type="email"
        />
        <button
          disabled={loading}
          onClick={async (e) => {
            e.preventDefault();
            try {
              setLoading(true);
              const response = await AuthService.passwordResetReq(email);
              console.log(response);
              setError("");
              setSuccess(true);
              setTimeout(() => {
                setActive(false);
                setEmail("");
                setSuccess(false);
                setLoading(false);
              }, 5000);
            } catch (e) {
              console.log(e);
              setError(e.response.data.message);
              setSuccess(false);
            }
          }}
          className={styles.button}
        >
          Отправить
        </button>
        {error ? (
          <span className={styles.error}>
            Ошибка!<span>{error}</span>
          </span>
        ) : (
          <></>
        )}
        {success ? (
          <span className={styles.error}>
            Подтвердите изменение <span>на почте</span>
          </span>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
};
