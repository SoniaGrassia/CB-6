import { useState, useContext } from "react";
import { Context } from "../../store";
import styles from "./index.module.scss";

const Modal = () => {
  const { state, dispatch } = useContext(Context);

  const onHandleTodo = (e) => {
    dispatch({ type: "SET_TEMP_TODO", payload: e.target.value });
  };

  const onHandleUsername = (e) => {
    dispatch({ type: "SET_TEMP_USERNAME", payload: e.target.value });
  };

  const onHandleImage = (e) => {
    dispatch({ type: "SET_TEMP_IMG", payload: e.target.value });
    dispatch({
      type: "SET_TEMP_ID",
      payload: Math.floor(Math.random(4) * 1000 + 1),
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "MODAL_IS_VISIBLE" });
    dispatch({ type: "CREATE_NEW_TASK", payload: state.temporaryTodo });
  };

  const onHanldeClose = () => {
    dispatch({ type: "MODAL_IS_VISIBLE" });
  };
  return (
    <div className={styles.Modal}>
      <div className={styles.overlay} onClick={onHanldeClose}></div>
      <div className={styles.content}>
        <h3 className={styles.title}>Inserisci un nuovo ToDo:</h3>
        <form className={styles.form} onSubmit={onHandleSubmit}>
          <input
            type="text"
            className={styles.todo}
            value={state.temporaryTodo.todo}
            onChange={onHandleTodo}
            placeholder="ToDo..."
            required
          />
          <input
            type="text"
            className={styles.username}
            vale={state.temporaryTodo.username}
            onChange={onHandleUsername}
            placeholder="Username.."
            required
          />
          <input
            type="text"
            className={styles.image}
            value={state.temporaryTodo.image}
            onChange={onHandleImage}
            placeholder="Image.."
            required
          />
          <input className={styles.submitBtn} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
export default Modal;
