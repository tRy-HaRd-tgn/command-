import styles from "./styles.module.scss";
export const Button = ({ onClick, children, className, style, type }) => {
  return (
    <button
      type={type}
      style={style}
      className={className ? className : styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
