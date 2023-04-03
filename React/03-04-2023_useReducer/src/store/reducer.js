//action permette di definire qual è il tipo di mutazione che deve avvenire
//state -> valore entro il quale voglio che avvengano queste mutazioni
export const generalReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        // lo stato iniziale viene incrementato (value è la chiave che ho nell'oggetto che contiene il valore iniziale)
        //spread operator -> del mio state io modifico solo il valore della chiave value
        ...state,
        value: state.value + 1,
      };
    case "decrement":
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      //se lo stato non viene mutato mi viene ritornato per quello che era
      return state;
  }
};

//in base al tipo di azione, il Reducer mi ritorna un nuovo stato formato da quei valori presenti nel return
