import React from "react";
import Header from "./components/Layout/Header";
import AvailableItems from "./components/Items/availableItems";

import { useState } from "react";

import "./App.css";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import { Route } from "react-router-dom";
import AboutPath from "./components/Pages/About";
import HomeItemList from "./components/Pages/HomeItemList";

function App() {
  const [aboutPathState, setAboutPathState] = useState("");
  const [cartState, setCartState] = useState(false);
  const openCardHandler = () => {
    setCartState(true);
  };
  const closeCartHandler = () => {
    setCartState(false);
  };
  const openAboutPageHandler = () => {
    setAboutPathState("about");
  };
  return (
    <CartProvider>
      {cartState && <Cart onClose={closeCartHandler}></Cart>}
      <Header onOpen={openCardHandler}  />
      <Route path='/store'>
        <AvailableItems />
      </Route>
      <Route path='/about'>
        <AboutPath />
      </Route>
      <Route path='/home'>
        <HomeItemList />
      </Route>

    </CartProvider>
  );
}

export default App;
