/*
Esercizio 1
Sulla base della lezione del giorno, scrivere una funzione che generi 
una hero dinamicamente tramite Javascript. Devo essere presenti i seguenti elementi:

Image di sfondo
Un titolo principale
Un sottotitolo descrittivo breve

Avanzato
Scrivere un applicazione piu ampia che includa la Hero 
dell'esercizio 1 e aggiunga anche una sezione relativa a dei 
prodotti (simile a quanto visto a lezione), attenzione a creare
un contenitore che inglobi tutti i singoli prodotti 
(qualcosa simile a productEl). 
*/

//importo i dati dei prodotti
import { products } from "./mocks.js";

//creo il body
const bodyEl = document.body;

//creo la Hero
const heroSection = document.createElement("section");
const imgHero = document.createElement("img");
const titleHero = document.createElement("h1");
const descriptionHero = document.createElement("p");

//section
heroSection.className = "hero";

//img
imgHero.className = ".img_hero";
imgHero.setAttribute("src", "https://picsum.photos/seed/picsum/650/300");
imgHero.setAttribute("alt", "Hero Image");

//title
titleHero.className = "title_hero";
titleHero.textContent = "Welcome in my page!";

//p
descriptionHero.className = "description_hero";
descriptionHero.textContent =
  "On this page you will find a series of products.";

//Appendo gli elementi della hero al body
heroSection.append(imgHero, titleHero, descriptionHero);
bodyEl.append(heroSection);

//creo la sezione che conterrà le card e l'appendo al body
const productListEl = document.createElement("section");
productListEl.className = "products_list";
bodyEl.appendChild(productListEl);

//creo le card tramite funzione
const createCard = (product) => {
  const productEl = document.createElement("div");
  const imgProduct = document.createElement("img");
  const titleProduct = document.createElement("h3");
  const descriptionProduct = document.createElement("p");

  //div
  productEl.className = "product";

  //img product
  imgProduct.className = "img_product";
  imgProduct.setAttribute("src", product.img);
  imgProduct.setAttribute("alt", product.title);

  //title product
  titleProduct.className = "title_product";
  titleProduct.textContent = product.title;

  //description Product
  descriptionProduct.className = "description_product";
  descriptionProduct.textContent = product.description;

  productEl.append(imgProduct, titleProduct, descriptionProduct);
  productListEl.appendChild(productEl);
};

for (let product of products) {
  createCard(product);
}
