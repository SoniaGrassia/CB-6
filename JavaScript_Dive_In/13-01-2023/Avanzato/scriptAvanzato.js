/*Avanzato
Creare il template dello slider cui sopra completamente dinamico (via Javascript).
 */

//creo gli elementi
const bodyEl = document.body;
const containerEl = document.createElement("div");
const titleEl = document.createElement("h1");
const fotoEl = document.createElement("img");
const shapeEl = document.createElement("div");
const switchEl = document.createElement("div");
const leftBtnEl = document.createElement("button");
const centerBtnEl = document.createElement("button");
const rightBtnEl = document.createElement("button");
//creo l'array con gli indirizzi delle foto
const images = [
  "https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/159020/sunset-sky-afterglow-evening-sky-159020.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];

//gli assegno una classe e l'attributo se necessario
containerEl.className = "container";
titleEl.textContent = "Click on the dots to scroll";
fotoEl.className = "foto";
fotoEl.setAttribute(
  "src",
  "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
);
shapeEl.className = "shape";
switchEl.className = "switch";
leftBtnEl.className = "left-btn";
centerBtnEl.className = "center-btn";
rightBtnEl.className = "right-btn";

//li appendo
switchEl.append(leftBtnEl, centerBtnEl, rightBtnEl);
containerEl.append(titleEl, fotoEl, shapeEl, switchEl);
bodyEl.appendChild(containerEl);

//aggiungo l'event per il left button
leftBtnEl.addEventListener("click", () => {
  fotoEl.setAttribute("src", images[0]);
  leftBtnEl.style.opacity = "0.3";
  centerBtnEl.style = "none";
  rightBtnEl.style = "none";
});

//aggiungo l'event per il center button
centerBtnEl.addEventListener("click", () => {
  fotoEl.setAttribute("src", images[1]);
  centerBtnEl.style.opacity = "0.3";
  leftBtnEl.style = "none";
  rightBtnEl.style = "none";
});

//aggiungo l'event per il right button
rightBtnEl.addEventListener("click", () => {
  fotoEl.setAttribute("src", images[2]);
  rightBtnEl.style.opacity = "0.3";
  leftBtnEl.style = "none";
  centerBtnEl.style = "none";
});
