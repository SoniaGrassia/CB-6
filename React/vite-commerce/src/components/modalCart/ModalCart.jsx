import "./index.css";

const ModalCart = ({ productData }) => {
  return (
    <div className="ModalCart">
      <p>{productData.title}</p>
      <p>{productData.price}</p>
    </div>
  );
};

export default ModalCart;
