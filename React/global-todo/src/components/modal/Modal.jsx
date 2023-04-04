import { useState, useContext } from "react";
import { Context } from "../../store";
import styles from "./index.module.scss";

const Modal = () => {
  const [todo, setTodo] = useState("");
  const { state, dispatch } = useContext(Context);

  const onHandleTodo = (e) => {
    setTodo(e.target.value);
  };

  const onHandleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "MODAL_IS_VISIBLE" });
  };

  const onHanldeClose = () => {
    dispatch({ type: "MODAL_IS_VISIBLE" });
  };
  return (
    <div className={styles.Modal}>
      <div className={styles.overlay} onClick={onHanldeClose}></div>
      <div className={styles.content}>
        <h3 className={styles.title}>Inserisci un nuovo ToDo:</h3>
        <form className={styles.form} onSubmit={onHandleClick}>
          <input
            type="text"
            className={styles.input}
            value={todo}
            onChange={onHandleTodo}
            placeholder="ToDo..."
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
export default Modal;
