import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import{FaBars} from 'react-icons/fa';
import { animateScroll as scroll} from 'react-scroll';
import { FaUser } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    // NavMenu, 
    // NavItem,
    // NavLinks,  
    NavBtn, 
    NavBtnLink
} from './NavbarElements';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    },[])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
           <IconContext.Provider value={{ color: '#000'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Shopperbird</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <Link to='#' className='menu-bars'>
                        <FaBars />
                        </Link>
                    </MobileIcon>
                    {/* <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80} >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu> */}
                    <NavBtn>
                        <NavBtnLink to="/signup"><strong>Join Us</strong></NavBtnLink>
                        <FaUser />
                    </NavBtn>
                </NavbarContainer>
            </Nav>
           </IconContext.Provider>
        </>
    );
};

export default Navbar;
