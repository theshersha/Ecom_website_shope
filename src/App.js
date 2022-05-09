import React from "react";
import Header from "./components/Layout/Header";
import AvailableItems from "./components/Items/availableItems";
import ItemContainer from "./components/UI/Button/ItemContainer";
import {useState} from 'react';
import Modal from "./components/UI/Modal";
import "./App.css";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";


function App() {
  const [cartState,setCartState] = useState(false);
  const openCardHandler = ()=>{
    setCartState(true);
  
  };
  const closeCartHandler=()=>{
    setCartState(false);
  }
  return (
    <CartProvider>
      {cartState && <Cart onClose={closeCartHandler}></Cart>}
      <Header onOpen={openCardHandler}/>
      <AvailableItems />
    </CartProvider>
  );
}

export default App;
