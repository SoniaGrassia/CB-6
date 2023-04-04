import { useState, useReducer } from "react";
import { initialState } from "../../store/state";
import { mainReducer } from "../../store/reducers";
import styles from "./index.module.scss";

const Modal = () => {
  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const onHandleTodo = (e) => {
    setTodo(e.target.value);
  };

  const onHandleClick = (e) => {
    e.preventDefault();
  };

  const onHanldeClose = () => {
    dispatch({ type: "MODAL_IS_VISIBLE" });
    console.log(state);
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
