import { qS, qsA, cardPopulator } from "./utils.js";
import { GET2 } from "./api.js";

// NON COMPLETO
const searchEl = qS(".search-input");
const btnEl = qS(".btn-search");
const resultsSearch = qS(".results");
let searchInput = "";

const cardDelete = () => {
  const cardEl = qsA(".movie");

  cardEl.forEach((movie) => movie.remove());
};

searchEl.addEventListener("input", (e) => {
  cardDelete();
  searchInput = e.target.value;

  btnEl.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(searchInput);
    GET2("search", "tv", searchInput).then((data) => {
      data.results.map((movie) => resultsSearch.append(cardPopulator(movie)));
      console.log(data.results);
    });
  });
});
