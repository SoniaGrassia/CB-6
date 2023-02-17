/* Esercizio 1
Sulla base della lezione di oggi, creare un intervallo temporale che
simuli un conto alla rovescia, che dopo n secondi:

- mostra il timer in schermo, come visto a lezione;
- che allo scadere del timer la pagina deve cambiare colore e il 
timer stesso deve scomparire;
-la presenza di un pulsante STOP interrompe il flusso temporale, 
tramite il relativo clearInterval.
*/
const bodyEl = document.body;
const container = document.createElement("div");
const countDownEl = document.createElement("h1");
const btnStop = document.createElement("button");

countDownEl.textContent = "Wait...";
btnStop.textContent = "STOP";

bodyEl.append(container, btnStop);
container.appendChild(countDownEl);

//creo la mia variabile timeout
let timeout = 5;

//setTimeout di 5s per far apparire il timer
const countDown = setTimeout(() => {
  interval;
}, 5000);

//setInterval che gestisce il testo a schermo, il cambio colore e
//il remove allo scadere del tempo
const interval = setInterval(() => {
  countDownEl.textContent = timeout;
  if (timeout === 0) {
    bodyEl.style.backgroundColor = "white";
    container.remove();
    btnStop.remove();
    clearInterval(interval);

    const btnBoom = document.createElement("img");
    btnBoom.src =
      "https://c.tenor.com/bWOg2LpSEP4AAAAM/panda-making-a-mess.gif";
    bodyEl.appendChild(btnBoom);
  } else {
    timeout--;
  }
}, 1000);

btnStop.addEventListener("click", () => clearInterval(interval));
