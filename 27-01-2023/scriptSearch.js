import { qS } from "./utils.js";

// NON COMPLETO
const searchEl = qS(".search-input");
const btnEl = qS(".btn-search");
let searchInput = "";

searchEl.addEventListener("submit", (e) => {
  searchInput = e.target.value;
  console.log(searchInput);
});
