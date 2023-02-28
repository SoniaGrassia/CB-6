import "./index.css";

const Header = () => {
  return (
    <div className="Header">
      <h2 className="title">Link utili</h2>
      <ul className="unorderd-list">
        <li>
          <a href="https://github.com/SoniaGrassia/Edgemony-esercizi">
            La mia repository GitHub
          </a>
        </li>
        <hr />
        <li>
          <a href="https://it.reactjs.org/docs/introducing-jsx.html">
            Introduzione a React
          </a>
        </li>
        <hr />

        <li>
          <a href="https://dummyjson.com/">dummyJSON</a>
        </li>
        <hr />

        <li>
          <a href="https://picsum.photos/">LoremPicsum</a>
        </li>
        <hr />

        <li>
          <a href="https://fonts.google.com/">Google Fonts</a>
        </li>
        <hr />

        <li>
          <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties">
            FlexBox Giude
          </a>
        </li>
        <hr />

        <li>
          <a href="https://edgemony.com/cb6-edge-lezioni/">Edgemony</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
