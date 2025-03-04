import { brain } from "../../assets";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Header = ({ setProjects, projects, active, setActive, mode }) => {
  const auth = useSelector((state) => state.auth.isAuth);
  const name = useSelector((state) => state.user.name);
  const surname = useSelector((state) => state.user.surname);
  const router = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img className={styles.header__logo__img} src={brain} alt="error" />
        <p className={styles.header__logo__p}>Команда+</p>
      </div>
      <div style={{ width: "90%" }}>
        <ul className={styles.header__list}>
          {auth ? (
            <li
              className={styles.header__list__item}
              onClick={() => {
                router("/projects");
              }}
            >
              <p className={styles.header__list__item__p}>витрина проектов</p>
            </li>
          ) : (
            <></>
          )}
          <li className={styles.header__list__item}>
            <p className={styles.header__list__item__p}>контакты</p>
          </li>
          {mode == 1 ? (
            <li className={styles.header__list__item}>
              <button
                className={styles.header__list__item__button}
                onClick={() => setActive(!active)}
              >
                вход/регистрация
              </button>
            </li>
          ) : (
            <li
              className={styles.header__list__item}
              style={{ display: "flex" }}
              onClick={() => {
                router("/profile1");
              }}
            >
              <p className={styles.header__list__item__p}>
                {name + " " + surname}
              </p>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};
