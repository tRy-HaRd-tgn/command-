import { useState } from "react";
import styles from "./styles.module.scss";
import AuthService from "../../service/AuthService";
import { useSearchParams } from "react-router-dom";
export const PasswordReset = (props) => {
  const [state, setState] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={(e) => e.preventDefault()}
        action=""
      >
        <label className={styles.label} htmlFor="input">
          Введите новый пароль
        </label>
        <input
          className={styles.input}
          placeholder="Пароль"
          name="input"
          type="password"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button
          disabled={loading}
          onClick={async () => {
            try {
              setLoading(true);
              const response = await AuthService.passwordReset(
                searchParams.get("token"),
                state
              );
              console.log(response);
              setError("");
              setSuccess("Пароль изменен, через 5 секунд сайт закроется");
              setTimeout(() => {
                window.close();
                setLoading(false);
              }, 5000);
            } catch (e) {
              setLoading(false);
              setError(e.response.data.message);
              setSuccess(false);
            }
          }}
          className={styles.button}
          type="button"
        >
          Отправить
        </button>
        {error ? <span className={styles.result}>{error}</span> : <></>}
        {success ? <span className={styles.result}>{success}</span> : <></>}
      </form>
    </div>
  );
};
