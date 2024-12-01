import styles from "./styles.module.scss";
export const Input = ({ placeholder, type, value, onChange, style }) => {
  return (
    <input
      style={style}
      placeholder={placeholder}
      className={styles.form_input}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
