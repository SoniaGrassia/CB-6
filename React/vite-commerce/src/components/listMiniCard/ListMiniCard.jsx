import { useState, useEffect } from "react";
import MiniCard from "../miniCard/MiniCard";
import { GET } from "../../utils/http";
import "./index.css";

const ListMiniCard = ({ inputValue }) => {
  const [miniCards, setMiniCards] = useState([]);

  useEffect(() => {
    GET(inputValue ? `/products/category/${inputValue}` : "/products").then(
      (data) => setMiniCards(() => data.products)
    );
    // console.log(inputValue);
  }, [inputValue]);

  return (
    <div className="ListMiniCard">
      {miniCards.map((card) => (
        <MiniCard imgSrc={card.thumbnail} imgAlt={card.title} key={card.id} />
      ))}
    </div>
  );
};

export default ListMiniCard;
