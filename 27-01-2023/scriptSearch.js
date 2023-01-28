import { qS, qsA, cardPopulator } from "./utils.js";
import { GET2 } from "./api.js";

// NON COMPLETO
const searchEl = qS(".search-form");
const resultsSearch = qS(".search-input");
const moviesResult = qS(".results");
let searchInput = "";

const cardDelete = () => {
  const cardEl = qsA(".movie");

  cardEl.forEach((movie) => movie.remove());
};

searchEl.addEventListener("submit", (e) => {
  cardDelete();
  e.preventDefault();
  searchInput = resultsSearch.value;
  console.log(searchInput);

  GET2("search", "multi", searchInput).then((data) => {
    data.results.map((movie) => moviesResult.append(cardPopulator(movie)));
    console.log(data.results);
  });
});
