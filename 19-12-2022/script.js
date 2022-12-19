// Primo esercizio versione 1
/*
let operation = prompt("Inserire l'operazione matematica da eseguire:");

// Primo valore
let firstInput = prompt("Inserire il primo valore");
let firstNumber = Number(firstInput);

// Secondo valore
let secondInput = prompt("Inserire il secondo valore");
let secondNumber = Number(secondInput);

if (operation == "addizione") {
  console.log(firstNumber + secondNumber);
} else if (operation == "sottrazione") {
  console.log(firstNumber - secondNumber);
} else if (operation == "moltiplicazione") {
  console.log(firstNumber * secondNumber);
} else if (operation == "divisione") {
  console.log(firstNumber / secondNumber);
}
*/
// -------------------------------------------------------------------------------------
// Primo esercizio versione 2
/*
let operation = prompt("Inserire l'operazione matematica da eseguire:");

if (
  operation != "addizione" &&
  operation != "sottrazione" &&
  operation != "moltiplicazione" &&
  operation != "divisione"
) {
  alert("Operazione non valida");
  window.location.reload();
} else {
  let firstInput = prompt("Inserire il primo valore");
  let firstNumber = Number(firstInput);
  let secondInput = prompt("Inserire il secondo valore");
  let secondNumber = Number(secondInput);

  if (operation == "addizione") {
    console.log(firstNumber + secondNumber);
  } else if (operation == "sottrazione") {
    console.log(firstNumber - secondNumber);
  } else if (operation == "moltiplicazione") {
    console.log(firstNumber * secondNumber);
  } else if (operation == "divisione") {
    console.log(firstNumber / secondNumber);
  }
}
*/
// -------------------------------------------------------------------------------------
// Secondo esercizio con Switch
/* 
let operation = prompt("Inserire l'operazione matematica da eseguire:");

// Primo valore
 let firstInput = prompt("Inserire il primo valore");
 let firstNumber = Number(firstInput);

// Secondo valore
let secondInput = prompt("Inserire il secondo valore");
let secondNumber = Number(secondInput);

switch (operation) {
  case "addizione":
    console.log(firstNumber + secondNumber);
    break;

  case "sottrazione":
    console.log(firstNumber - secondNumber);
    break;

  case "moltiplicazione":
    console.log(firstNumber * secondNumber);
    break;

  case "divisione":
    console.log(firstNumber / secondNumber);
    break;

  default:
    console.log("Operazione non valida");
}
*/
// -------------------------------------------------------------------------------------
// Terzo esercizio Operatore ternario
/*
let operation = prompt("Inserire l'operazione matematica da eseguire:");

// Primo valore
let firstInput = prompt("Inserire il primo valore");
let firstNumber = Number(firstInput);

// Secondo valore
let secondInput = prompt("Inserire il secondo valore");
let secondNumber = Number(secondInput);

operation == "addizione"
  ? console.log(firstNumber + secondNumber)
  : operation == "sottrazione"
  ? console.log(firstNumber - secondNumber)
  : operation == "moltiplicazione"
  ? console.log(firstNumber * secondNumber)
  : operation == "divisione"
  ? console.log(firstNumber / secondNumber)
  : console.log("Operazione non valida");

*/
