

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
const cartElements = [
  { 
  title: 'Colors', 
  price: 100,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png', 
  quantity: 2,
  },
  
  {
  title: 'Black and white Colors',
  price: 50,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png', 
  quantity: 3,
  }, 
  {
   title: 'Yellow and Black Colors',  
  price: 70, 
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',  
  quantity: 1, 
  }
  ]

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  
  const cartItemRemoveHandler = (key) => {
    cartCtx.removeItem(key)
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };


  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        
        <CartItem
          key={Math.random()}
          name={item.name}
          price={item.price}
          img={item.imageUrl}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          
        />
      ))}
      {console.log(cartCtx,'cartctx')}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;