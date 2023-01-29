import { qS, cE, cardPopulator, cardDelete } from "./utils.js";
import { GET2, GET3 } from "./api.js";

const searchEl = qS(".search-form");
const resultsSearch = qS(".search-input");
const titleEl = qS(".title");
const moviesResult = qS(".results");

const serieTvTitle = cE("h2");
const serieTvEl = cE("section");
const filmTitle = cE("h2");
const filmEl = cE("setion");

serieTvTitle.textContent = "Serie tv";
serieTvEl.className = "tv";
filmTitle.textContent = "Film";
filmEl.className = "film";

let searchInput = "";

GET2("trending", "all").then((data) => {
  data.results.map((movie) => moviesResult.append(cardPopulator(movie)));
});

searchEl.addEventListener("submit", (e) => {
  cardDelete();
  e.preventDefault();
  searchInput = resultsSearch.value;
  titleEl.textContent = "Risultati per " + '"' + searchInput + '"';

  moviesResult.append(serieTvTitle, serieTvEl, filmTitle, filmEl);

  Promise.all([
    GET3("search", "tv", searchInput),
    GET3("search", "movie", searchInput),
  ]).then((data) => {
    data[0].results.map((movie) => serieTvEl.append(cardPopulator(movie)));
    data[1].results.map((movie) => filmEl.append(cardPopulator(movie)));
  });
});
