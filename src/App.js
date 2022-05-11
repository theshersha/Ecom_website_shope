import React from "react";
import Header from "./components/Layout/Header";
import AvailableItems from "./components/Items/availableItems";
import ContactUs from "./components/Pages/ContactUs";
import { useState,useContext} from "react";
import ProductDetails from "./components/Items/ProductDetails";
import "./App.css";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import { Route, Switch, Redirect } from "react-router-dom";
import AboutPath from "./components/Pages/About";
import HomeItemList from "./components/Pages/HomeItemList";
import Authentication from './components/Pages/Authentication';
import AuthContext from "./store/auth-context";

function App() {
  const authctx = useContext(AuthContext);

  const [cartState, setCartState] = useState(false);
  const openCardHandler = () => {
    setCartState(true);
  };
  const closeCartHandler = () => {
    setCartState(false);
  };

  async function onAddDataHandler(contactdata) {
    const response = await fetch(
      "https://security-ccc7c-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(contactdata),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <CartProvider>
      {cartState && <Cart onClose={closeCartHandler}></Cart>}
      <Header onOpen={openCardHandler} />
      <Switch>
      {!authctx.isLoggedIn && (
          <Route path="/auth">
            <Authentication />
          </Route>
        )}

        <Route path='/' exact>
          <Redirect to='/about'/>
        </Route>

        {authctx.isLoggedIn && (
        <Route path="/store" exact>
          <AvailableItems />
        </Route>
        )}

        {authctx.isLoggedIn && (
        <Route path='/store/:productID'>
          <ProductDetails></ProductDetails> 
        </Route>
        )}

        <Route path="/about">
          <AboutPath />
        </Route>

        <Route path="/home">
          <HomeItemList />
        </Route>

        <Route path="/contact-us">
          <ContactUs onAddData={onAddDataHandler}></ContactUs>
        </Route>

        <Route path="/*" exact>
            <Redirect to='/auth'/>
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
