import styles from "./styles.module.scss";
export const ModalIcon = ({ setState, active, children, setActive }) => {
  const swapStates = () => {
    setState(false);
    setActive(false);
  };
  return (
    <>
      <div
        className={active ? styles.modal_active : styles.modal}
        onClick={swapStates}
      >
        <div
          className={
            active ? styles.modal__content : styles.modal__content_active
          }
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
};
