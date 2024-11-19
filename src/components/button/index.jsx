import styles from "./styles.module.scss";
export const Button = ({ onClick, children, className }) => {
  return (
    <button className={className ? className : styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
