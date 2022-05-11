import './Header.css';
import { Fragment,useContext } from 'react';
import Button from '../UI/Button/Button';
import HeaderCartButton from './HeaderCartButton';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const Header = props =>{
  const authctx= useContext(AuthContext);
    return (
        <Fragment>
          <header className='header'>
            <h1>Fashion Hub</h1>

            <NavLink to='/home' activeClassName='active'><Button>Home</Button></NavLink>
            
            {authctx.isLoggedIn && <NavLink to='/store' activeClassName='active'><Button>Store</Button></NavLink>}
            <NavLink to='/about' activeClassName='active'><Button >About Us</Button></NavLink>
            <NavLink to='/contact-us' activeClassName='active'><Button >Contact Us</Button></NavLink>
            {!authctx.isLoggedIn && <NavLink to='/auth' activeClassName='active'><Button>Log In</Button></NavLink> }
            {authctx.isLoggedIn && <HeaderCartButton onOpen={props.onOpen}/>}
            {authctx.isLoggedIn && <button onClick={authctx.logout} className='button'>Log Out</button>}
           
          </header>
          <div className='headerlowerpart'>
              <div className='headerlowertext'>Shop Anything and get within 3 Days!</div>
          </div>
        </Fragment>
      );

}
export default Header;

/* <NavLink to='/home' activeClassName='active'><Button>Home</Button></NavLink>
            <NavLink to='/store' activeClassName='active'><Button>Store</Button></NavLink>
            <NavLink to='/about' activeClassName='active'><Button >About Us</Button></NavLink>
            <NavLink to='/contact-us' activeClassName='active'><Button >Contact Us</Button></NavLink>
            <HeaderCartButton onOpen={props.onOpen}/>
            <NavLink to='/home' activeClassName='active'><Button>Home</Button></NavLink>*/