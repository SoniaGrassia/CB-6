import { cE, qS, cardCreator, numRandom } from "./utils.js";
import { GET } from "./fetchMethods.js";

export const bodyEl = qS("body");
export const cardEl = cE("div");
cardEl.className = "card";

bodyEl.appendChild(cardEl);

//per generare l'aforisma con id 1
GET("quotes/" + numRandom()).then((data) =>
  bodyEl.appendChild(cardCreator(data))
);
