import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
// import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll} from 'react-scroll';
import { FaUser } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavBtn,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 60) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
           <IconContext.Provider value={{ color: '#000'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <MobileIcon>
                        <Link to='/' cursor='pointer' className='menu-bars'>
                        <img src={Logo} alt="" width="50" height="50" />
                        </Link>
                    </MobileIcon>
                    <NavLogo to='/' onClick={toggleHome}>Shopperbird</NavLogo>
                    <NavBtn>
                        <Link to='/customer-page' cursor='pointer'>
                        <FaUser />
                        </Link>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
           </IconContext.Provider>
        </>
    );
};

export default Navbar;