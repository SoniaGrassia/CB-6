import "./index.css";

const WelcomeDiv = ({ title, alt }) => {
  return (
    <div className="WelcomeDiv">
      <img
        className="background"
        src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg"
        alt={alt}
      />
      <div className="text">
        <h2 className="welcome-title">{title}</h2>
        <p className="description">
          Qui potrai trovare tutti i link utili per la creazione di un'app con
          React
        </p>
      </div>
    </div>
  );
};

export default WelcomeDiv;
