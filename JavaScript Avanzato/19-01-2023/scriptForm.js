const formProductEl = document.querySelector(".formProduct");
const titleEl = document.querySelector("#title");
const priceEl = document.querySelector("#price");
const categoryEl = document.querySelector("#category");
const imageEl = document.querySelector("#image");
const descriptionEl = document.querySelector("#description");

const formCategoriesEl = document.querySelector(".formCategories");
const nameCatEl = document.querySelector("#nameCategory");
const imageCatEl = document.querySelector("#imageCategory");

// FORM NUOVA CATEGORIA
formCategoriesEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const obj = {
    name: nameCatEl.value,
    image: imageCatEl.value,
  };
  functionPost(obj, "categories");
});

// fINE FORM NUOVA CATEGORIA

//FORM NUOVO PRODOTTO
formProductEl.addEventListener("submit", (event) => {
  //non aggiorna la pagina
  event.preventDefault();

  if (parseInt(categoryEl.value) < 1) {
    alert("La categoria deve essere maggiore di 0");
    return;
  }

  const obj = {
    //costruisco l'oggetto con i dati inseriti nel form
    title: titleEl.value,
    price: parseInt(priceEl.value),
    description: descriptionEl.value,
    categoryId: parseInt(categoryEl.value),
    images: [imageEl.value],
  };
  functionPost(obj, "products");
});
// FINE FORM NUOVO PRODOTTO

//funzione POST
const functionPost = (objElements, par) => {
  fetch("https://api.escuelajs.co/api/v1/" + par, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objElements),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.stusCode >= 400 && data.statusCode < 500) {
        alert(`${par} Non caricato: ` + data.message[0]);
      } else {
        alert(`${par} Caricato correttamente`);
        console.log(data);
      }
    })
    .catch((e) => console.log("ERRORE: ", e));
};
