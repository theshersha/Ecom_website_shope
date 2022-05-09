import './Header.css';
import { Fragment } from 'react';
import Button from '../UI/Button/Button';
import HeaderCartButton from './HeaderCartButton';

const Header = props =>{
    return (
        <Fragment>
          <header className='header'>
            <h1>J and K Shopping</h1>
            <Button>Home</Button>
            <Button>Store</Button>
            <Button>About Us</Button>
            <HeaderCartButton onOpen={props.onOpen}/>

          </header>
          <div className='headerlowerpart'>
              <div className='headerlowertext'>Shop Anything and get within 3 Days!</div>
          </div>
        </Fragment>
      );

}
export default Header;