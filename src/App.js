import React from "react";
import Header from "./components/Layout/Header";
import AvailableItems from "./components/Items/availableItems";
import ContactUs from "./components/Pages/ContactUs";
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

  
  async function onAddDataHandler(contactdata) {
    const response = await fetch('https://jasmin-ecommerce-default-rtdb.firebaseio.com/contact.json', {
      method: 'POST',
      body: JSON.stringify(contactdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }
 


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
      <Route path='/contact-us'>
        <ContactUs onAddData={onAddDataHandler}></ContactUs>
       
      </Route>

    </CartProvider>
  );
}

export default App;
