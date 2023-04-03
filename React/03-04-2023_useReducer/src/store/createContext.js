import { createContext } from "react";

//oggetto che ospita tutti gli elementi che mi serviranno all'interno del contesto
//Sarà il valore che passerò come value al Provider e sarà il valore iniziale
export const initGlobalState = {
  value: 0,
  prova: "valore che non voglio modificare con il reducer",
};

//Contesto Globale vuoto ma che avrà come valore ciò che vado ad assegnarli
export const GlobalContext = createContext({});
