import { shortDescription } from "../../utils/func";
import "./index.css";
import { BsCartPlus } from "react-icons/bs";

const Card = ({ productData, setModalContent }) => {
  const onHandleAdd = () => {
    setModalContent({ productData: productData });
    console.log(productData);
  };

  return (
    <div className="Card">
      <img
        className="Card__image"
        src={productData.thumbnail}
        alt={productData.title}
      />
      <div className="Card__text">
        <h3 className="Card__text--title">{productData.title}</h3>
        <p className="Card__text--desc">
          {shortDescription(productData.description)}
        </p>
        <p className="Card__text--cat">{productData.category}</p>
        <p className="Card__text--price">$ {productData.price}</p>
        <BsCartPlus className="Card__cart-icon" onClick={onHandleAdd} />
      </div>
    </div>
  );
};

export default Card;
