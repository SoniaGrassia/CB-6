import { getFunction } from "./fetchFunction.js";

const carrelloEl = document.querySelector(".carrello");
const tendinaEl = document.querySelector(".tendina");

const image1 = document.querySelector("#img-1");
const image2 = document.querySelector("#img-2");
const image3 = document.querySelector("#img-3");

const dot1 = document.querySelector("#dot1");
const dot2 = document.querySelector("#dot2");
const dot3 = document.querySelector("#dot3");

const loaderBtn = document.querySelector(".loader-btn");

const productSection = document.querySelector(".products");

const cart = [];

carrelloEl.addEventListener("click", () => {
  tendinaEl.classList.toggle("show");
});

dot1.addEventListener("click", () => {
  image1.classList.add("show");
  image2.classList.remove("show");
  image3.classList.remove("show");

  dot1.classList.add("active");
  dot2.classList.remove("active");
  dot3.classList.remove("active");
});

dot2.addEventListener("click", () => {
  image1.classList.remove("show");
  image2.classList.add("show");
  image3.classList.remove("show");

  dot1.classList.remove("active");
  dot2.classList.add("active");
  dot3.classList.remove("active");
});

dot3.addEventListener("click", () => {
  image1.classList.remove("show");
  image2.classList.remove("show");
  image3.classList.add("show");

  dot1.classList.remove("active");
  dot2.classList.remove("active");
  dot3.classList.add("active");
});

//LOADER BTN che richiama la funzione GET
loaderBtn.addEventListener("click", () => {
  loaderBtn.textContent = "Loading...";

  getFunction().then((data) => {
    createCard(data);
  });
});

const createCard = (data) => {
  loaderBtn.textContent = "Prodotti caricati";

  //per ogni dato
  data.forEach((item) => {
    //creo la card
    const cardEl = document.createElement("div");
    cardEl.className = "card";

    //il nome di ogni prodotto
    const titleEl = document.createElement("h1");
    titleEl.className = "name";
    titleEl.textContent = item.title.substr(0, 15);

    //l'immagine
    const imageEl = document.createElement("img");
    imageEl.setAttribute("src", item.images[0]);
    imageEl.className = "image";

    //l'id
    const idEl = document.createElement("p");
    idEl.className = "id";
    idEl.textContent = "ID Prodotto: " + item.id;

    //la descrizione
    const descriptionEl = document.createElement("p");
    descriptionEl.className = "description";
    descriptionEl.textContent = item.description.substr(0, 30);

    //il prezzo
    const priceEl = document.createElement("p");
    priceEl.className = "price";
    priceEl.textContent = item.price + " €";

    //bottone per l'acquisto
    const btnBuy = document.createElement("button");
    btnBuy.className = "btn-buy";
    btnBuy.textContent = "Aggiungi al carrello";
    btnBuy.addEventListener("click", () => {
      cartPopulator(item);
      alert("Hai aggiunto il prodotto al carrello");
    });

    cardEl.append(titleEl, imageEl, idEl, descriptionEl, priceEl, btnBuy);
    productSection.appendChild(cardEl);
  });
};

//creo gli elementi del carrello
const cartCreation = () => {
  tendinaEl.innerHTML = "";
  cart.forEach((item, index) => {
    const buyEl = document.createElement("div");
    buyEl.className = "cartRow";
    buyEl.innerHTML = `<p>${item.title}</p><p>${item.price + "€"}</p><p>x ${
      item.qty
    }</p>`;

    const removeEl = document.createElement("button");
    removeEl.className = "delete-btn";
    removeEl.textContent = "X";
    removeEl.addEventListener("click", () => {
      buyEl.remove();
      cart.splice(index, 1);
    });

    buyEl.appendChild(removeEl);
    tendinaEl.appendChild(buyEl);
  });
};

//popolo il carrello
const cartPopulator = (item) => {
  const newObj = {
    id: item.id,
    title: item.title,
    price: item.price,
    qty: 1,
  };

  //quantità prodotti
  const search = cart.filter((element) => {
    if (element.id === newObj.id) {
      element.qty++;
      return element;
    }
  });

  if (search.length === 0) {
    cart.push(newObj);
  }

  cartCreation();
};
