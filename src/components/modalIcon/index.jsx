import styles from "./styles.module.scss";
export const ModalIcon = ({ state, setState, active, children, setActive }) => {
  const swapStates = (e) => {
    e.stopPropagation();
    setState(false);
    setActive(false);
  };
  const classnames = () => {
    return active
      ? !state
        ? styles.modal__content
        : styles.modal__content_active
      : styles.modal__content_active;
  };
  return (
    <>
      <div
        className={active ? styles.modal_active : styles.modal}
        onMouseDown={swapStates}
      >
        <div
          className={classnames()}
          styles={
            state ? { width: "70vh", height: "150vh", zIndex: "9999" } : {}
          }
          onMouseDown={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
};
