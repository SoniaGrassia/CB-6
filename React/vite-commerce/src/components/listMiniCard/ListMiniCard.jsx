import { useState, useEffect } from "react";
import MiniCard from "../miniCard/MiniCard";
import { GET } from "../../utils/http";
import "./index.css";

const ListMiniCard = ({ inputValue }) => {
  const [miniCards, setMiniCards] = useState([]);
  const [category, setCategory] = useState("fragrances");

  useEffect(() => {
    GET(`/products/category/${category}`).then((data) =>
      setMiniCards(() => data.products)
    );
    // console.log(inputValue);
  }, []);

  // useEffect(() => {
  //   setCategory(inputValue);
  // }, [inputValue]);
  // console.log(miniCards);
  return (
    <div className="ListMiniCard">
      {miniCards.map((card) => (
        <MiniCard imgSrc={card.thumbnail} imgAlt={card.title} key={card.id} />
      ))}
    </div>
  );
};

export default ListMiniCard;
