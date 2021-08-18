import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
// import { links } from '../../helpers/link';
// import logo from '../assets/shared/desktop/logo.svg';
// import Cart from '../Cart/Cart';
// import icon_cart from '../assets/shared/desktop/icon-cart.svg';
import Burger from '../Burger/Burger';
import AccountCircle from '@material-ui/icons/AccountCircle';

const Navbar = () => {
  const location = useLocation();
  return (
    <Wrapper
      className={`${location.pathname === '/' ? 'light-bgc' : 'black-bgc'}`}
    >
      <div className='container header__container'>
        <Burger />
        <Link to='/' className='logo'>
        <h3>Shopperbird</h3>
        </Link>
        <div className='cart-icon-container'>
        <h6>Join Us</h6>
        <div className='user-image'>
          <Link to='/create-account'>
            <AccountCircle />
          </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: grid;
  place-items: center;
  color: var(--clr-white);
  height: 5.625rem;
  .logo {
    max-height: 1.565rem;
  }
  nav {
    display: grid;
  }

  .header__container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user-image {
      cursor: pointer;
      color: #000;
      justify-content: left;
      align-items: left;
    }
    .cart-icon-container {
      position: relative;
      .cart-count {
        text-align: center;
        width: 1.2rem;
        line-height: 1.2rem;
        position: absolute;
        top: -0.5rem;
        left: 1rem;
        background-color: var(--clr-black);
        border-radius: 50%;
        font-size: 0.75rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .logo {
      margin-right: 26rem;
    }
  }
  @media screen and (min-width: 1280px) {
    .logo {
      margin: 0;
    }
    nav {
      display: grid;
    }
  }
`;

export default Navbar;