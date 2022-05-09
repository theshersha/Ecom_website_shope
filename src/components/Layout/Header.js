import './Header.css';
import { Fragment } from 'react';
import Button from '../UI/Button/Button';
import HeaderCartButton from './HeaderCartButton';
import { NavLink } from 'react-router-dom';

const Header = props =>{
    return (
        <Fragment>
          <header className='header'>
            <h1>Fancy Hub</h1>
            <NavLink to='/home' activeClassName='active'><Button>Home</Button></NavLink>
            <NavLink to='/store' activeClassName='active'><Button>Store</Button></NavLink>
            <NavLink to='/about' activeClassName='active'><Button >About Us</Button></NavLink>
            <HeaderCartButton onOpen={props.onOpen}/>

          </header>
          <div className='headerlowerpart'>
              <div className='headerlowertext'>Shop Anything and get within 3 Days!</div>
          </div>
        </Fragment>
      );

}
export default Header;