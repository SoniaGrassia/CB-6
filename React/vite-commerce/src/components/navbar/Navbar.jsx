import "./index.css";

const Navbar = ({ inputValue, setInputValue }) => {
  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputValue);
    // TODO: trasmettere inputValue nella GET di ListMiniCard per usarlo come /endpoint
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
    </div>
  );
};

export default Navbar;
