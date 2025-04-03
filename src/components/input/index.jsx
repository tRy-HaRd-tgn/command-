import styles from "./styles.module.scss";
import { eye as img } from "../../assets";
import React, { forwardRef } from "react";
import { useState } from "react";
export const Input = forwardRef(
  (
    {
      placeholder,
      type,
      value,
      onChange,
      style,
      className,
      form,
      eye,
      id,
      ...registerS
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);
    return (
      <div
        style={form ? { width: "98%" } : { width: "80%" }}
        className={styles.container}
      >
        <input
          id={id}
          ref={ref}
          {...registerS}
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
  }
);
