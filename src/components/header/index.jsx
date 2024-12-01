import { brain } from "../../assets";
import styles from "./styles.module.scss";
export const Header = ({ active, setActive, mode }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img className={styles.header__logo__img} src={brain} alt="error" />
        <p className={styles.header__logo__p}>Команда+</p>
      </div>
      <div style={{ width: "90%" }}>
        <ul className={styles.header__list}>
          <li className={styles.header__list__item}>
            <p className={styles.header__list__item__p}>витрина проектов</p>
          </li>
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
            <li className={styles.header__list__item} style={{ display: "flex" }}>
              <p className={styles.header__list__item__p}>Фамилия Имя</p>
              <img src="" alt="" />
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};
