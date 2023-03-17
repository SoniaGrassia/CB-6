import "./index.css";
import { BsCart3 } from "react-icons/bs";

const Navbar = ({ inputValue, setInputValue, setIsVisible, cartLength }) => {
  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setInputValue(() => inputValue);
  };

  const onHendleCartClick = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
      </ul>
      <form onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Cerca prodotto ..."
          required
        />
      </form>
      <div className="Navbar__cart" onClick={onHendleCartClick}>
        <BsCart3 className="Navbar__cart-icon" />
        <p>{cartLength}</p>
      </div>
    </div>
  );
};

export default Navbar;
