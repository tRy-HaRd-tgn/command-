import styles from "./styles.module.scss";
import { eye as img } from "../../assets";
import { useState } from "react";
export const Input = ({
  placeholder,
  type,
  value,
  onChange,
  style,
  className,
  form,
  eye,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      style={form ? { width: "98%" } : { width: "80%" }}
      className={styles.container}
    >
      <input
        style={style}
        placeholder={placeholder}
        className={styles.input}
        type={visible ? "text" : type}
        value={value}
        onChange={onChange}
      />
      {eye ? (
        <img
          onClick={() => {
            setVisible(!visible);
          }}
          className={styles.eye}
          src={img}
          alt=""
        />
      ) : null}
    </div>
  );
};
