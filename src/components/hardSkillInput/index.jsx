import styles from "./styles.module.scss";
export const HardInput = ({ props, key, values, setValues, index }) => {
  const handleChange = (e) => {
    if (e.target.value.length > 1 && Number(e.target.value) === 0) {
      e.target.value = 0;
    }
    const num = e.target.value;
    let mas = values.slice();
    mas[index] = num;
    setValues(mas);
    if (num > 10) {
      mas[index] = 10;
      setValues(mas);
    } else if (num < 0) {
      mas[index] = "";
      setValues(mas);
    } else if (num === "") {
      mas[index] = "";
      setValues(mas);
    } else if (/^(?:[0-9]|10)$/.test(num) === false) {
      mas[index] = "";
      setValues(mas);
    }
  };
  return (
    <input
      style={{
        height: "3vh",
        width: "3vh",
        fontSize: "2vh",
        marginRight: "1%",
        borderRadius: "10px",
        border: "1px solid black",
        textAlign: "center",
      }}
      key={key}
      value={values[index]}
      onChange={handleChange}
      type={"number"}
    />
  );
};
