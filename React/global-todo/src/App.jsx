import { useReducer } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/hero";
import TasksList from "./components/tasksList";
import Modal from "./components/modal";
import styles from "./App.module.scss";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const onHandleClick = () => {
    dispatch({ type: "MODAL_IS_VISIBLE" });
  };
  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        {state.isModalVisible && <Modal />}
        <Hero />
        <TasksList />
        <button className={styles.addTodo} onClick={onHandleClick}>
          {"+"}
        </button>
      </Context.Provider>
    </div>
  );
}

export default App;
