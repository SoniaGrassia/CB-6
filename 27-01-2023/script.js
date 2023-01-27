import { GET } from "./api.js";

import { qS, cardPopulator } from "./utils.js";

const popularFilms = qS(".popular");
const topRatedFilms = qS(".top-rated");

Promise.all([GET("tv", "popular"), GET("tv", "top_rated")]).then((data) => {
  data[0].results.map((movie) => popularFilms.append(cardPopulator(movie)));

  data[1].results.map((movie) => topRatedFilms.append(cardPopulator(movie)));
});
