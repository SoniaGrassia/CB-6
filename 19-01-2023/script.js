const bodyEl = document.querySelector("body");

const headerEl = document.createElement("header");
headerEl.className = "header";

const formLinkEl = document.createElement("a");
formLinkEl.className = "link-form";
formLinkEl.setAttribute("href", "./indexForm.html");
formLinkEl.textContent = "Aggiungi prodotto";

const productEl = document.createElement("section");

//creo il button per caricare i file
const loaderEl = document.createElement("button");
loaderEl.className = "btn-loader";
loaderEl.textContent = "Carica i prodotti";

//creo il carrello
const cartEl = document.createElement("div");
cartEl.className = "carrello";
//con la sua immagine
const cartImg = document.createElement("img");
cartImg.className = "carrello__img";
cartImg.setAttribute("src", "./1124199.png");

//creo la tendina
const tendinaEl = document.createElement("div");
tendinaEl.className = "tendina";

const cart = [];

cartEl.addEventListener("click", () => {
  tendinaEl.classList.toggle("show");
});

cartEl.appendChild(cartImg);
headerEl.append(loaderEl, formLinkEl, cartEl, tendinaEl);
bodyEl.appendChild(headerEl);

//loader
loaderEl.addEventListener("click", () => {
  loaderEl.textContent = "loading...";

  fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((data) => {
      const newData = data.filter((item) => item.category.id === 1);

      dataManipulation(newData);
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
    titleEl.textContent = item.title.substr(0, 11);

    //l'immagine del prodotto ma non funziona
    const imageEl = document.createElement("img");
    imageEl.setAttribute("src", item.images[0]);
    imageEl.className = "image";

    //l'id
    const idEl = document.createElement("p");
    idEl.className = "id";
    idEl.textContent = "Codice prodotto: " + item.id;

    //la descrizione
    const descriptionEl = document.createElement("p");
    descriptionEl.className = "description";
    descriptionEl.textContent = item.description.substr(0, 30);

    //il prezzo
    const priceEl = document.createElement("p");
    priceEl.className = "price";
    priceEl.textContent = item.price + "$";

    //il bottone per l'acquisto
    const btnBuy = document.createElement("button");
    btnBuy.className = "btn-buy";
    btnBuy.textContent = "Aggiungi al carrello";

    btnBuy.addEventListener("click", () => {
      cartPopulator(item);
      alert("Hai aggiunto il prodotto al carrello");
    });

    containerEl.append(titleEl, imageEl, idEl, descriptionEl, priceEl, btnBuy);
    productEl.appendChild(containerEl);
    bodyEl.appendChild(productEl);
  });
};

const cartCreation = () => {
  tendinaEl.innerHTML = "";
  cart.forEach((item, index) => {
    const buyEl = document.createElement("div");
    buyEl.className = "cartRow";
    buyEl.textContent = item.title;

    const removeEl = document.createElement("button");
    removeEl.textContent = "X";

    removeEl.addEventListener("click", () => {
      buyEl.remove();
      cart.splice(index, 1);
    });

    buyEl.appendChild(removeEl);
    tendinaEl.appendChild(buyEl);
  });
};

const cartPopulator = (item) => {
  const newObj = {
    id: item.id,
    title: item.title,
    price: item.price,
    qty: 1,
  };

  //per la quantità dei prodotti nel carrello
  const search = cart.filter((element) => {
    if (element.id === newObj.id) {
      element.qty++;
      return element;
    }
  });

  if (search.length === 0) {
    cart.push(newObj);
  }

  console.log(cart);
  cartCreation();
};
