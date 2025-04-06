import styles from "./styles.module.scss";
export const ProjectComp = ({ name, description, img, term }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={img} alt="всё хорошо" />
      <p>{name}</p>
      <p>{term}</p>
      <p>{description}</p>
    </div>
  );
};
