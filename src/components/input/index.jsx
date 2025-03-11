import styles from "./styles.module.scss";

export const Input = ({
  placeholder,
  type,
  value,
  onChange,
  style,
  className,
}) => {
  return (
    <input
      style={style}
      placeholder={placeholder}
      className={styles.input}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
