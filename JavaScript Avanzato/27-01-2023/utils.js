export const qS = (type) => document.querySelector(type);
export const qsA = (type) => document.querySelectorAll(type);
export const cE = (element) => document.createElement(element);

export const cardPopulator = (data) => {
  const cardEl = cE("div");
  const imgEl = cE("img");

  cardEl.setAttribute("id", data.id);
  cardEl.className = "movie";

  if (data.poster_path) {
    imgEl.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    );
  } else {
    imgEl.setAttribute(
      "src",
      "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
    );
  }
  imgEl.setAttribute("alt", data.name);
  cardEl.appendChild(imgEl);
  return cardEl;
};

export const cardDelete = () => {
  const cardEl = qsA(".movie");

  cardEl.forEach((movie) => movie.remove());
};
