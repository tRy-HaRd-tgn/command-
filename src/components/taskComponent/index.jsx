import styles from "./styles.module.scss";
export const Task = ({ props, index, array, setArray }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.index}>{index}</h1>
      <input
        value={array[index]}
        onChange={(e) => {
          let temp = array.slice();

          temp[index] = e.target.value;
          setArray(temp);
        }}
        className={styles.input}
        type="text"
      />
      <button
        onClick={() => {
          let arr = array.slice();
          console.log(arr);
          arr = arr.slice(0, index).concat(arr.slice(index + 1));
          setArray(arr);
        }}
        className={styles.button}
      >
        Удалить
      </button>
    </div>
  );
};
