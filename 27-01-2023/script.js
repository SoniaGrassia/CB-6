import { GET1 } from "./api.js";

import { qS, cardPopulator } from "./utils.js";

const popularFilms = qS(".popular-movies");
const topRatedFilms = qS(".top-rated-movies");
const popularTv = qS(".popular-tv");
const topRatedTv = qS(".top-rated-tv");

Promise.all([
  GET1("movie", "popular"),
  GET1("movie", "top_rated"),
  GET1("tv", "popular"),
  GET1("tv", "top_rated"),
]).then((data) => {
  data[0].results.map((movie) => popularFilms.append(cardPopulator(movie)));
  data[1].results.map((movie) => topRatedFilms.append(cardPopulator(movie)));
  data[2].results.map((movie) => popularTv.append(cardPopulator(movie)));
  data[3].results.map((movie) => topRatedTv.append(cardPopulator(movie)));
});
