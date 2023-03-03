import "./index.css";

const Button = ({ text, name }) => {
  const onBtnClick = () => {
    alert(`Hai selezionato ${name}`);
  };

  return (
    <button className="button" onClick={onBtnClick}>
      {text}
    </button>
  );
};

export default Button;
