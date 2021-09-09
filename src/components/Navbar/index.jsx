import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { FaUser } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {
    Nav, 
    NavbarContainer, 
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