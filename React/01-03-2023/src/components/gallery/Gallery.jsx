import { useState } from "react";

import "./index.css";

const Gallery = () => {
  const listPhotoGallery = [
    "https://www.pokemonmillennium.net/wp-content/uploads/2023/02/Pokemon-Day-2023-1.jpg",
    "https://fcjohndoe.com/wp-content/uploads/pokemon-leggendari.avif",
  ];

  const [displayedImage, setDisplayedImage] = useState(0);

  const previousImage = () => {
    setDisplayedImage(
      (displayedImage - 1 + listPhotoGallery.length) % listPhotoGallery.length
    );
  };

  const nextImage = () => {
    setDisplayedImage((displayedImage + 1) % listPhotoGallery.length);
  };

  return (
    <div className="Gallery">
      <h2>Gallery</h2>
      <div className="carousel">
        <button onClick={previousImage}>{"<"}</button>
        <img src={listPhotoGallery[displayedImage]} alt="" />
        {/* <img src={listPhotoGallery[1]} alt="" /> */}
        <button onClick={nextImage}>{">"}</button>
      </div>
    </div>
  );
};
export default Gallery;
