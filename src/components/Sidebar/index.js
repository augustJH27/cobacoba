import React from 'react'
import { Link } from 'react-router-dom';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <Link to='/'>
                    <SidebarRoute to="/" onClick={toggle}>
                        HOME
                    </SidebarRoute>
                    </Link>
                    <Link to='/about-us'>
                    <SidebarRoute to="/about-us" onClick={toggle}>
                        ABOUT US
                    </SidebarRoute>
                    </Link>
                    <Link to='/signup'>
                    <SidebarRoute to="/signup" onClick={toggle}>
                        JOIN US
                    </SidebarRoute>
                    </Link>
                    <Link to='/measure'>
                    <SidebarRoute to="/measure" onClick={toggle}>
                        MEASURE
                    </SidebarRoute>
                    </Link>
                    <Link to='/design'>
                    <SidebarRoute to="/design" onClick={toggle}>
                        DESIGN
                    </SidebarRoute>
                    </Link>
                    <Link to='/upcycle'>
                    <SidebarRoute to="/upcycle" onClick={toggle}>
                        UPCYCLE
                    </SidebarRoute>
                    </Link>
                    <Link to='/news'>
                    <SidebarRoute to="/news" onClick={toggle}>
                        NEWS
                    </SidebarRoute>
                    </Link>
                    <Link to='/signin'>
                    <SidebarRoute to="/signin" onClick={toggle}>
                        Log in
                    </SidebarRoute>
                    </Link>
                    <Link to='/signup'>
                    <SidebarRoute to="/signup" onClick={toggle}>
                        Create Account
                    </SidebarRoute>
                    </Link>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
