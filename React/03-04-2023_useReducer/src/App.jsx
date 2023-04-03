import { initGlobalState, GlobalContext } from "./store/createContext";
import { useReducer } from "react";
import { generalReducer } from "./store/reducer";
import Counter from "./components/counter";
import "./App.css";

function App() {
  //il dispatch qui non serve. Come initialState passo lo stato iniziale definito in createContext
  const [state] = useReducer(generalReducer, initGlobalState);
  return (
    <div className="App">
      {/* il provider posso averlo in main se voglio che i valori siano
      disponibili per tutta l'app */}
      {/* come valore passo lo state, e non più l'initGlobalState, perchè muterà là dove viene lanciato il dispatch */}
      <GlobalContext.Provider value={state}>
        <Counter />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
