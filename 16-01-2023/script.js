/*Esercizio 1
Seguendo quello fatto oggi a lezione effettuate una chiamate fetch()
 alla seguente API web: https://api.escuelajs.co/api/v1/products e 
 stampate in console nome e descrizione del prodotto simile a questo 
 formato:

 --------------
Tasty Rubber Soap
The Football Is Good For Training And Recreational Purposes
--------------
Modern Bronze Chair
New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, 
power UHD Graphics, OS 10 Home, OS Office A & J 2016
*/
/*
//metodo fetch per collegare l'API
fetch("https://api.escuelajs.co/api/v1/products")
  .then((response) => response.json())
  .then((data) => dataManipulation(data));

//funzione per manipolare l'array dentro l'API che mi restituisce in
//console il nome e la descrizione del prodotto
const dataManipulation = (data) => {
  data.forEach((item) => {
    console.log(item.title, item.description);
  });
};
*/

/*Avanzato
Crea delle card il più verosimili possibile ad un vero e-commerce e 
provate ad utilizzare un loader (puo anche essere un semplice 
messaggio) e la gestione degli errori
*/
const bodyEl = document.querySelector("body");
const productEl = document.createElement("section");
//creo il button per caricare i file
const loaderEl = document.createElement("button");
loaderEl.className = "btn-loader";
loaderEl.textContent = "Carica i prodotti";

bodyEl.appendChild(loaderEl);

loaderEl.addEventListener("click", () => {
  loaderEl.textContent = "loading...";

  fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((data) => {
      dataManipulation(data);
    })
    .catch((e) => {
      loaderEl.textContent = "Errore nel caricamento della pagina";
      console.log("Errore: ", e);
    });
});

const dataManipulation = (data) => {
  loaderEl.textContent = "Prodotti caricati";

  data.forEach((item) => {
    //creo la card
    const containerEl = document.createElement("div");
    containerEl.className = "card";

    //il nome di ogni prodotto
    const titleEl = document.createElement("h1");
    titleEl.className = "name";
    titleEl.textContent = item.title;

    //l'immagine del prodotto ma non funziona
    const imageEl = document.createElement("img");
    imageEl.className = "image";
    imageEl.setAttribute = ("src", item.images);

    //l'id
    const idEl = document.createElement("p");
    idEl.className = "id";
    idEl.textContent = "Codice prodotto: " + item.id;

    //la descrizione
    const descriptionEl = document.createElement("p");
    descriptionEl.className = "description";
    descriptionEl.textContent = item.description;

    //il bottone con il prezzo
    const buttonPriceEl = document.createElement("button");
    buttonPriceEl.className = "btn-buy";
    buttonPriceEl.textContent = item.price + "$";

    containerEl.append(titleEl, imageEl, idEl, descriptionEl, buttonPriceEl);
    productEl.appendChild(containerEl);
    bodyEl.appendChild(productEl);
  });
};
