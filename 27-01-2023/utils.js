export const qS = (type) => document.querySelector(type);
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
  }
  imgEl.setAttribute("alt", data.title);
  cardEl.appendChild(imgEl);
  return cardEl;
};
