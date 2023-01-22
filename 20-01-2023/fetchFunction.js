//GET per importare i prodotti
export const getFunction = () =>
  fetch("https://api.escuelajs.co/api/v1/products").then((res) => res.json());

//POST per inserire un nuovo prodotto o una nuova categoria
export const functionPost = (objElements, par) => {
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
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(`${par} Non caricato: ` + data.message[0]);
      } else {
        alert(`${par} Caricato correttamente`);
      }
    })
    .catch((e) => console.log("Errore: ", e));
};

//PUT per modificare un prodotto
export const functionPut = (objElements, idProduct = "") => {
  fetch("https://api.escuelajs.co/api/v1/products/" + idProduct, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objElements),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(`${idProduct} Non modificato: ` + data.message[0]);
      } else {
        alert(`${idProduct} Modificato correttamente`);
        console.log(data);
      }
    })
    .catch((e) => console.log("Errore: ", e));
};

//DELETE per eliminare prodotti
export const functionDelete = (idProduct = "") => {
  fetch("https://api.escuelajs.co/api/v1/products/" + idProduct, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data !== true) {
        alert("Non cancellato: " + data.name);
      } else {
        alert("Cancellato correttamente");
      }
    })
    .catch((e) => console.log("ERRORE: ", e));
};
