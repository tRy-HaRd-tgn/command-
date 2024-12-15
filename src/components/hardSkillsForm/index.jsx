import styles from "./styles.module.scss";
import { arrowRight } from "../../assets";
import { Input } from "../input";
import { mas } from "./data/index";
export const HardSkillsForm = (props) => {
  return (
    <div
      style={{
        width: "40%",
        height: "auto",
        display: "flex",
        alignItems: "center",
        marginBottom: "1%",
      }}
    >
      <div className={styles.container}>
        <h2 className={styles.h2}>
          Выберите из списка профессиональные компетенции и оцените уровень
          владения каждой из них
        </h2>
        {mas.map((value, index) => (
          <div>
            <Input
              style={{
                height: "3vh",
                width: "2vh",
                fontSize: "2vh",
                marginRight: "1%",
              }}
              key={index}
            />
            {value}
          </div>
        ))}
      </div>
      <img
        style={{
          cursor: "pointer",
          marginLeft: "1%",
          width: "5vh",
          height: "5vh",
        }}
        src={arrowRight}
        alt="error"
      />
    </div>
  );
};
