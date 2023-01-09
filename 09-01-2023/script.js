/*Sulla base della lezione del giorno, ricreare la calcolatrice fatta in passato utilizzando
 solo arrow functions.

nb. ogni singola operazione sara una arrow function

Alla fine combinare le varie operazioni in una funzione piu ampia, dove all'utente viene 
data la possibilita di scegliere quale operazione effettuare. Siate liberi di aggiungere 
gli argomenti a piacere, come per esempio i numeri, se chiederli all'utente o meno.
*/

//Creo le arrow function per ogni operazione
const sum = (firstNum, secondNum) => firstNum + secondNum;
// console.log("Arrow Function Sum Result: ", sum(1, 2));
const subtraction = (firstNum, secondNum) => firstNum - secondNum;
// console.log("Arrow Function Subtraction Result: ", subtraction(3, 2));
const multiplication = (firstNum, secondNum) => firstNum * secondNum;
// console.log("Arrow Function Multiplication Result: ", multiplication(5, 10));
const division = (firstNum, secondNum) => firstNum / secondNum;
// console.log("Arrow Function Division Result: ", division(10, 2));

//Creo i prompt per l'inserimento dell'operazione e dei valori da parte dell'utente
const operation = prompt(
  "Inserisci l'operazione da eseguire (es. addizione/sottrazione/moltiplicazione/divisione)"
);
let firstInput = prompt("Inserisci il primo valore");
let firstNum = Number(firstInput);
let secondInput = prompt("Inserisci il second valore");
let secondNum = Number(secondInput);

//Funzione calcolatrice con if ed else if
function calculator1() {
  if (operation === "addizione") {
    console.log(sum(firstNum, secondNum));
    return sum(firstNum, secondNum);
  } else if (operation === "sottrazione") {
    console.log(subtraction(firstNum, secondNum));
    return subtraction(firstNum, secondNum);
  } else if (operation === "moltiplicazione") {
    console.log(multiplication(firstNum, secondNum));
    return multiplication(firstNum, secondNum);
  } else if (operation === "divisione") {
    console.log(division(firstNum, secondNum));
  }
}

//Funzione calcolatrice con lo switch
function calculator2() {
  switch (operation) {
    case "addizione":
      console.log(
        "Risultato dell'addizione tra ",
        firstNum,
        " e ",
        secondNum,
        " è: ",
        sum(firstNum, secondNum)
      );
      break;

    case "sottrazione":
      console.log(
        "Risultato della sottrazione tra ",
        firstNum,
        " e ",
        secondNum,
        " è: ",
        subtraction(firstNum, secondNum)
      );
      break;

    case "moltiplicazione":
      console.log(
        "Risultato della moltiplicazione tra ",
        firstNum,
        " e ",
        secondNum,
        " è: ",
        multiplication(firstNum, secondNum)
      );
      break;

    case "divisione":
      console.log(
        "Risultato della divisione tra ",
        firstNum,
        " e ",
        secondNum,
        " è: ",
        division(firstNum, secondNum)
      );
      break;

    default:
      console.log("Operazione non valida");
  }
}

//Richiamo le due funzioni
// calculator1()
// calculator2();

//-----------------------------------------------------------------------------------------

/*AVANZATO
Provare a completare l'esercizio sopra applicando qualche callback. Anche qui non 
importa l'impostazione, siate creativi, l'importante che si verifichi il caso di 
una callback.
*/

//Come parametri inserisco due numeri e il nome di una delle arrow function create inizialmente
function calculator3(num1, num2, callback) {
  return callback(num1, num2); //mi restituirà l'operazione inserita come parametro tra i due numeri
}

// console.log(calculator3(10, 5, sum));
// console.log(calculator3(5, 2, subtraction));
// console.log(calculator3(10, 5, multiplication));
// console.log(calculator3(10, 2, division));
