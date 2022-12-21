/*
ESERCIZIO 1:
scrivere una prima funzione che presa una stringa come argomento,
ritorni la stessa stringa + la parola "bootcamp"
*/

function word(string) {
  //   console.log(string + " bootcamp");
  return string + " bootcamp";
}

word("edgemony code");

/*
ESERCIZIO 2:
scrivere un oggetto col vostro nome che vi identifichi in proprietà
(nome, cognome, ecc...) e per metodi (es. possono anche essere
    semplici console.log di voi che eseguite un hobby)
*/

const sonia = {
  name: "Sonia",
  surname: "Grassia",
  age: 28,
  firstHobby: "ricamare",
  secondHobby: "ascoltare musica",
  hobby: function () {
    console.log(
      "Ciao sono " +
        this.name +
        " ho " +
        this.age +
        " anni e nel tempo libero mi piace " +
        this.firstHobby +
        " e " +
        this.secondHobby
    );
  },
};

// console.log(sonia);
// sonia.hobby();

/*
AVANZATO:
Scrivere una funzione calculator che preo come argomento un'operazione
e due numeri, ritorni alla fine il numero risultato dall'operazione scelta.
*/

// Inserimento dati mediante argomenti della funzione

function calculator(operation, n1, n2) {
  if (operation === "addizione") {
    console.log("Il risultato dell'addizione è " + (n1 + n2));
    return n1 + n2;
  } else if (operation === "sottrazione") {
    console.log("Il risultato della sottrazione è " + (n1 - n2));
    return n1 - n2;
  } else if (operation === "moltiplicazione") {
    console.log("Il risultato della moltiplicazione è " + n1 * n2);
    return n1 * n2;
  } else if (operation === "divisione") {
    console.log("Il risultato della divisione è " + n1 / n2);
    return n1 / n2;
  }
}
/*
calculator("addizione", 10, 5);
calculator("sottrazione", 10, 5);
calculator("moltiplicazione", 10, 5);
calculator("divisione", 10, 5);
*/

// Inserimento dei dati attraverso Prompt

function calculatorUser() {
  const operation = prompt(
    "Inserisci l'operazione da eseguire (es. addizione/sottrazione/moltiplicazione/divisione)"
  );
  let num1 = prompt("Inserisci il primo numero");
  let n1 = Number(num1);
  let num2 = prompt("Inserisci il secondo numero");
  let n2 = Number(num2);

  if (operation === "addizione") {
    console.log(n1 + n2);
    return n1 + n2;
  } else if (operation === "sottrazione") {
    console.log(n1 - n2);
    return n1 - n2;
  } else if (operation === "moltiplicazione") {
    console.log(n1 * n2);
    return n1 * n2;
  } else if (operation === "divisione") {
    console.log(n1 / n2);
    return n1 / n2;
  }
}
/*
calculatorUser();
*/
