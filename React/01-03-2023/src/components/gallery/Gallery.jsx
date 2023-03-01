import "./index.css";

const Gallery = () => {
  const listPhotoGallery = [
    "https://www.pokemonmillennium.net/wp-content/uploads/2023/02/Pokemon-Day-2023-1.jpg",
    "https://fcjohndoe.com/wp-content/uploads/pokemon-leggendari.avif",
  ];


  return (
    <div className="Gallery">
      <h2>Gallery</h2>
      <div className="carousel">
        <button></button>
        <img src={listPhotoGallery[0]} alt="" />
        <img src={listPhotoGallery[1]} alt="" />
        <button></button>
      </div>
    </div>
  );
};
export default Gallery;
