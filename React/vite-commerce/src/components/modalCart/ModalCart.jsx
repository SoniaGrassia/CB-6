import { IoIosRemoveCircleOutline } from "react-icons/io";
import "./index.css";

const ModalCart = ({ cartList, setCartList }) => {
  const onHandleClick = (cartproduct) => {
    const filteredList = cartList.filter(
      (product) => product.id !== cartproduct.id
    );

    setCartList(() => filteredList);

    localStorage.setItem("cartList", JSON.stringify(filteredList));
  };

  return (
    <div className="ModalCart">
      {!cartList.length ? (
        <h2>Il carrello è vuoto..</h2>
      ) : (
        cartList.map((product) => (
          <div className="ModalCart__item" key={product.id}>
            <img
              className="ModalCart__image"
              src={product.thumbnail}
              alt={product.title}
            />
            <p className="ModalCart__title">{product.title}</p>

            <p className="ModalCart__price">${product.price}</p>
            <IoIosRemoveCircleOutline
              className="ModalCart__rmv"
              onClick={() => onHandleClick(product)}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ModalCart;
