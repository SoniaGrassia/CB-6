/*Esercizio 1
Sulla base della lezione del giorno, creare una paginetta che 
effettui una chiamata di tipo GET all'endpoint 
https://dummyjson.com/users, renderizzare la lista di utenti, 
creando delle cards con i valori a vostra scelta 
(es. nome, cognome, ecc...)

Avanzato
Sulla base dell'esercizio 1, creare un filtro tramite input 
che vada a filtrare la lista degli utenti per nome e/o cognome

*/
import { GET } from "./fetchMethods.js";

const cE = (type) => document.createElement(type);

const bodyEl = document.body;
const searchEl = cE("input");
searchEl.setAttribute("placeholder", "Patient search...");
let searchInput = "";

bodyEl.appendChild(searchEl);

const userCard = (data) => {
  const {
    firstName,
    lastName,
    maidenName,
    image,
    age,
    gender,
    bloodGroup,
    phone,
    id,
  } = data;

  const card = cE("div");
  const nameEl = cE("h3");
  const imgEl = cE("img");

  const descriptionEl = cE("div");
  const ageEl = cE("p");
  const genderEl = cE("p");
  const bloodEl = cE("p");

  const contactEl = cE("div");
  const phoneEl = cE("p");

  card.className = "card";
  card.setAttribute("id", id);
  nameEl.className = "name";
  nameEl.textContent = firstName + " " + maidenName + " " + lastName;
  imgEl.setAttribute("src", image);

  descriptionEl.className = "description";
  ageEl.textContent = "Age: " + age;
  genderEl.textContent = "Gender: " + gender;
  bloodEl.textContent = "Blood group: " + bloodGroup;

  contactEl.className = "contact";
  contactEl.textContent = "Contacts:";
  phoneEl.textContent = "Phone: " + phone;

  contactEl.append(phoneEl);
  descriptionEl.append(ageEl, genderEl, bloodEl);
  card.append(imgEl, nameEl, descriptionEl, contactEl);
  return card;
};

//funzione che pulisce
const userDelete = () => {
  const userEl = document.querySelectorAll(".card");

  userEl.forEach((user) => user.remove());
};

searchEl.addEventListener("input", (e) => {
  userDelete();
  //entro nel valore inserito tramite input
  searchInput = e.target.value;
  console.log(searchInput);

  GET("users?limit=30").then((data) =>
    data.users.map((user) => {
      //filtro i pazienti in base al loro nome inserito nell'input
      if (user.firstName.toLowerCase().includes(searchInput.toLowerCase()))
        bodyEl.appendChild(userCard(user));
    })
  );
});

GET("users?limit=30").then((data) =>
  data.users.map((user) => bodyEl.appendChild(userCard(user)))
);
