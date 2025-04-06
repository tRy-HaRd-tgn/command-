import styles from "./styles.module.scss";
import profile from "../../assets/profile.png";
export const SecondProjectComponent = ({ props, status, img, name }) => {
  function checkStatus(status) {
    switch (status) {
      case "MODERATION":
        return (
          <span className={styles.result} style={{ color: "orange" }}>
            На модерации
          </span>
        );
      case "REJECTED":
        return (
          <span className={styles.result} style={{ color: "red" }}>
            Отклонен
          </span>
        );
      case "IN_PROGRESS":
        return (
          <span className={styles.result} style={{ color: "black" }}>
            В прогрессе
          </span>
        );
      case "DONE":
        return (
          <span className={styles.result} style={{ color: "green" }}>
            Завершен
          </span>
        );
    }
  }
  return (
    <div className={styles.content}>
      <img className={styles.img} src={img ? img : profile} alt="всё хорошо" />
      <p className={styles.name}>
        <span>Название: </span>
        {name}
      </p>
      <p className={styles.status}>
        <span>Статус: </span>
        {checkStatus(status)}
      </p>
    </div>
  );
};
