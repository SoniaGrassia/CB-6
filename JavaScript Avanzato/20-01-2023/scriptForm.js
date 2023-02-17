import { functionPost, functionPut, functionDelete } from "./fetchFunction.js";

const newProductForm = document.querySelector(".new-product");
const titleEl = document.querySelector(".name");
const priceEl = document.querySelector(".price");
const categoryEl = document.querySelector(".category");
const imageEl = document.querySelector(".image");
const descriptionEl = document.querySelector(".description");

const newCategoryForm = document.querySelector(".new-category");
const nameCatEl = document.querySelector(".nameCategory");
const imageCatEl = document.querySelector(".imageCategory");

const editProductForm = document.querySelector(".edit-product");
const editIdEl = document.querySelector(".idProduct");
const editTitleEl = document.querySelector(".edit-title");
const editPriceEl = document.querySelector(".edit-price");
const editCatEl = document.querySelector(".edit-category");
const editImgEl = document.querySelector(".edit-image");
const editDescrEl = document.querySelector(".edit-description");

const deleteProductForm = document.querySelector(".delete-product");
const deleteIdEl = document.querySelector(".delete-id");

//FORM NUOVO PRODOTTO - POST
newProductForm.addEventListener("submit", (event) => {
  //non aggiorna la pagina
  event.preventDefault();

  //costruisco l'oggetto con i dati inseriti nel form
  const obj = {
    title: titleEl.value,
    price: parseInt(priceEl.value),
    description: descriptionEl.value,
    categoryId: parseInt(categoryEl.value),
    images: [imageEl.value],
  };

  functionPost(obj, "products");
});
//FINE FORM NUOVO PRODOTTO

//FORM NUOVA CATEGORIA - POST
newCategoryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const obj = {
    name: nameCatEl.value,
    image: imageCatEl.value,
  };
  functionPost(obj, "categories");
});
//FINE FORM NUOVA CATEGORIA

//FORM MODIFICA PRODOTTO - PUT
editProductForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const obj = {
    title: editTitleEl.value,
    price: parseInt(editPriceEl.value),
    description: editDescrEl.value,
    categoryId: parseInt(editCatEl.value),
    images: [editImgEl.value],
  };
  functionPut(obj, editIdEl.value);
});
//FINE FORM MODIFICA PRODOTTO

//FORM ELIMINA PRODOTTO
deleteProductForm.addEventListener("submit", (event) => {
  event.preventDefault();

  functionDelete(deleteIdEl.value);
});
//FINE FORM ELIMINA PRODOTTO
