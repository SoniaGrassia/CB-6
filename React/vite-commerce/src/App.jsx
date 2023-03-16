import { useState } from "react";
import CardList from "./components/cardList";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import ListMiniCard from "./components/listMiniCard";
import Navbar from "./components/navbar";
import ModalCart from "./components/modalCart";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    productData: {},
  });

  return (
    <div className="App">
      <Navbar
        inputValue={inputValue}
        setInputValue={setInputValue}
        setIsVisible={setIsVisible}
        setModalContent={setModalContent}
      />
      {isVisible ? <ModalCart productData={modalContent.productData} /> : null}
      <Hero />
      <ListMiniCard inputValue={inputValue} />
      <CardList
        title="Technology"
        endpoint="/products?limit=10"
        setModalContent={setModalContent}
      />
      <CardList
        title="Skincare"
        endpoint="/products?limit=10&skip=10"
        setModalContent={setModalContent}
      />
      <Footer />
    </div>
  );
}

export default App;
