/*Esercizio 1
Creiamo una nuova pagina al nostro e-commerce che includa 
un form
Questo form dovrà contenere i seguenti campi:
title
price
category
image (dove inseriremo un url ad immagine presente nel web)
description

aggiungiamo poi un addEventlistner al form che venga triggherato 
al submit. Questo evento dovrà stampare in console un oggetto che conterrà i seguenti valori

{
  title: -valore preso dal form-,
  price: -valore preso dal form-,
  description: -valore preso dal form-,
  categoryId: -valore preso dal form-,
  images: -valore preso dal form-
}
NB: per evitare che si riaggiorni al pagine utilizzare il metodo preventDefault()
 */
const containerForm = document.querySelector("#formContainer");
const titleEl = document.querySelector("#title");
const priceEl = document.querySelector("#price");
const categoryEl = document.querySelector("#category");
const imageEl = document.querySelector("#image");
const descriptionEl = document.querySelector("#description");

containerForm.addEventListener("submit", (event) => {
  //non aggiorna la pagina
  event.preventDefault();

  const obj = {
    //costruisco l'oggetto con i dati inseriti nel form
    title: titleEl.value,
    price: parseInt(priceEl.value),
    description: descriptionEl.value,
    categoryId: parseInt(categoryEl.value),
    images: [imageEl.value],
  };

  /*Avanzato
Inviare l'oggetto creato in precedenza ad una funzione che faccia 
una fetch() con il metodo POST per caricare il nuovo elemento al 
database
Gestite le risposte del POST in modo da dare un feedback all'utente

NB: ricordate di stringhificare l'oggetto con il metodo JSON.stringify()
*/
  //mi creo la funzione POST
  const functionPost = (objElements) => {
    fetch("https://api.escuelajs.co/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objElements),
    })
      .then((res) => res.json())
      .then((data) => console.log("RISPOSTA POST: ", data))
      .catch((e) => console.log("ERRORE: ", e));
  };
  alert("Prodotto caricato!");

  functionPost(obj);
});
