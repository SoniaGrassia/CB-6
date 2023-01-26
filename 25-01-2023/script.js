//RISOLTO E FUNZIONA

import mock from "./mock.json" assert { type: "json" };

const cE = (element) => document.createElement(element);
const bodyEl = document.body;

//creo le card dei dipendanti
const cardCreator = (mock) => {
  const { id, name, surname, photo } = mock;
  const cardEl = cE("div");
  const imgEl = cE("img");
  const idEl = cE("p");
  const nameEl = cE("p");
  const surnameEl = cE("p");

  cardEl.className = "card";

  imgEl.setAttribute("src", photo);

  idEl.className = "id_user";
  idEl.textContent = "ID: " + id;

  nameEl.className = "name-user";
  nameEl.textContent = "NOME: " + name;

  surnameEl.className = "surname-user";
  surnameEl.textContent = "COGNOME: " + surname;

  cardEl.append(imgEl, idEl, nameEl, surnameEl);
  bodyEl.appendChild(cardEl);
  return cardEl;
};

const container = cE("div");
container.className = "container";
bodyEl.appendChild(container);

//creo il grafico in base al sesso
const barGenerator = (gender, num) => {
  const barEl = cE("div");
  const genderEl = cE("h5");
  const statusEl = cE("div");

  barEl.className = "bar";
  genderEl.textContent = gender;
  statusEl.className = "gender-status";
  statusEl.style.height = `${num * 10}px`;

  barEl.append(genderEl, statusEl);
  container.appendChild(barEl);

  return container;
};

let femaleGender, maleGender;
let prova = [];
//array con female e male
const genderArr = mock.clients.map((client) => client.gender);

const totGender = () => {
  femaleGender = {
    g: genderArr.filter((gender) => gender === "female"),
    text: "female",
  };

  maleGender = {
    g: genderArr.filter((gender) => gender === "male"),
    text: "male",
  };

  prova.push(femaleGender, maleGender);
};
totGender();

for (let i = 0; i < prova.length; i++) {
  barGenerator(prova[i].text, prova[i].g.length);
}

mock.clients.map((client) => cardCreator(client));
