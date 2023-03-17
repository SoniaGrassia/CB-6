import { useState } from "react";
import CardList from "./components/cardList";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import ListMiniCard from "./components/listMiniCard";
import Navbar from "./components/navbar";
import ModalCart from "./components/modalCart";
import "./App.css";

function App() {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    productData: {},
  });

  const localStorageCartList =
    window !== "undefined" &&
    JSON.parse(localStorage.getItem("cartList") || "[]").length;

  return (
    <div className="App">
      <Navbar
        cartLength={localStorageCartList || cartList.length}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setIsVisible={setIsVisible}
        setModalContent={setModalContent}
      />

      {isVisible && <ModalCart cartList={cartList} setCartList={setCartList} />}

      <Hero />

      <ListMiniCard inputValue={inputValue} />

      <CardList
        title="Technology"
        endpoint="/products?limit=10"
        setModalContent={setModalContent}
        setCartList={setCartList}
      />

      <CardList
        title="Skincare"
        endpoint="/products?limit=10&skip=10"
        setModalContent={setModalContent}
        setCartList={setCartList}
      />

      <Footer />
    </div>
  );
}

export default App;
