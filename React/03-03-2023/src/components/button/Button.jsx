import "./index.css";

const Button = ({ setPokemonModal }) => {
  const onBtnClick = () => {
    setPokemonModal((prev) => !prev);
  };
  return (
    <button className="button" onClick={onBtnClick}>
      Seleziona
    </button>
  );
};

export default Button;
