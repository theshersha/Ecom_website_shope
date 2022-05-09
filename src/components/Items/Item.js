import './item.css'
import ItemForm from './ItemForm';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Items = props =>{
  
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };


    return(
        <li>
            <div className='list'>
                <h3>{props.name}</h3>
                <img src={props.img}></img>
                
                <div>{`Price: ${props.price}`}</div>
                
                <ItemForm id={props.id} onAddToCart={addToCartHandler}/>

            </div>
        </li>
    );

}


export default Items;