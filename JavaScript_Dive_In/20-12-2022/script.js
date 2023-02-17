/*Sulla base della lezione del giorno, scrivere un array inizialmente vuoto, 
e aggiungere al suo interno dieci elementi di tipo `string` a scelta, 
rispettando i seguenti punti:

- utilizzare il ciclo for classico

- sarà l'utente ad inserire queste stringhe (`prompt`)

- alla fine, quando l'utente avrà inserito tutte e 10 le parole, stamparle in console
*/

let firstList = [];

for (let object = 0; object < 10; object++) {
  firstList.push(prompt("Inserisci un elemento alla tua lista della spesa"));
}
console.log(firstList);
/*
# Avanzato

Riscrivere l'esercizio sopra utilizzando le altre due versioni minimal del ciclo for (`for in`e `for of`)
*/
// #1 For In che sovrascrive l'array creata con il for classico
// for (let objectIndex in firstList) {
//   firstList[objectIndex] = prompt("Inserisci un elemento");
// }
// console.log(firstList);

// #2 For in che concatena l'indice all'elemento che occupa quella posizione dell'array
for (let arrayIndex in firstList) {
  console.log(arrayIndex + " = " + firstList[arrayIndex]);
}

// #3 For of
for (let objectValue of firstList) {
  console.log(objectValue);
}
