export { cE, qS, cardCreator };

import { bodyEl, cardEl } from "./script.js";
import { GET } from "./fetchMethods.js";

const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const btnEl = cE("button");

export function numRandom() {
  const num = Math.round(Math.random() * 100);
  return num;
}

const cardCreator = (data) => {
  const quoteEl = cE("h3");
  const authorEl = cE("p");

  quoteEl.className = "quote";
  quoteEl.textContent = '"' + data.quote + '"';
  authorEl.className = "author";
  authorEl.textContent = "- " + data.author;
  btnEl.className = "btn";
  btnEl.textContent = "Random aforism";

  cardEl.append(quoteEl, authorEl, btnEl);
  console.log(data);
  return cardEl;
};

btnEl.addEventListener("click", () => {
  (cardEl.innerHTML = ""),
    GET("quotes/" + numRandom()).then((data) =>
      bodyEl.appendChild(cardCreator(data))
    );
});
