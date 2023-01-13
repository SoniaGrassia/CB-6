/*Esercizio 1
Creare uno slider (template via HTML), seguendo il wireframe 
presente in allegato, seguendo le logiche viste durante la lezione. 
Lo stesso dovrà presentare 3 immagini che si susseguono al click 
sui relativi pallini identificatori.
*/

const images = [
  "https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/159020/sunset-sky-afterglow-evening-sky-159020.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];

const fotoEl = document.querySelector(".foto");
const leftPoint = document.querySelector(".left-btn");
const centerPoint = document.querySelector(".center-btn");
const rightPoint = document.querySelector(".right-btn");

leftPoint.addEventListener("click", () => {
  fotoEl.setAttribute("src", images[0]);
  leftPoint.style.opacity = "0.3";
  centerPoint.style = "none";
  rightPoint.style = "none";
});

centerPoint.addEventListener("click", () => {
  fotoEl.setAttribute("src", images[1]);
  centerPoint.style.opacity = "0.3";
  leftPoint.style = "none";
  rightPoint.style = "none";
});

rightPoint.addEventListener("click", () => {
  fotoEl.setAttribute("src", images[2]);
  rightPoint.style.opacity = "0.3";
  leftPoint.style = "none";
  centerPoint.style = "none";
});
