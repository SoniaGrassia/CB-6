import { useContext, useReducer } from "react";
import { GlobalContext } from "../../store/createContext";
import { generalReducer } from "../../store/reducer";
import "./index.module.scss";

const Counter = () => {
  //questo è quello che arriva dal value del Provider
  const globalState = useContext(GlobalContext);
  //creo il Reducer e come initialState passo il valore che arriva dal Provider
  const [state, dispatch] = useReducer(generalReducer, globalState);

  const onHandleClick = (e) => {
    dispatch({ type: e.target.className });
  };

  return (
    <div className="Counter">
      <button className="increment" onClick={onHandleClick}>
        Increment
      </button>
      {/* passo state perchè sarà il valore modificato dal dispatch */}
      <h1 className="value">{state.value}</h1>
      <button className="decrement" onClick={onHandleClick}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
