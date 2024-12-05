import styles from "./styles.module.scss";
export const SoftSkillQuestion = ({text,style})=> {
    return (
        <div className={styles.container} style={style}>
            <h3 className={styles.h3}>{text}</h3>
        </div>
    )
}
