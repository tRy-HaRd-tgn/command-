import styles from "./styles.module.scss";
export const Button = ({ onClick, children, className, style }) => {
  return (
    <button
      style={style}
      className={className ? className : styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
