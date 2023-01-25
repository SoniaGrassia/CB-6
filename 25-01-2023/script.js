import mock from "./mock.json" assert { type: "json" };

const cE = (element) => document.createElement(element);
const bodyEl = document.body;

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

const barGenerator = () => {
  const graphicBar = cE("div");
  const statusEl = cE("div");

  graphicBar.className = "graphic";
  statusEl.className = "gender-status-bar";

  graphicBar.append(statusEl);
  bodyEl.appendChild(graphicBar);
  return graphicBar;
  //non completo, ci provo durante la serata
};
barGenerator();

mock.clients.map((client) => cardCreator(client));
