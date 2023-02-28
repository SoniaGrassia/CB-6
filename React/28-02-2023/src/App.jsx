import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import WelcomeDiv from "./components/welcomeDiv/WelcomeDiv";

const App = () => {
  return (
    <div className="App">
      <Header />
      <WelcomeDiv alt="homepage" title="Benvenuto" />
      <Footer />
    </div>
  );
};

export default App;
