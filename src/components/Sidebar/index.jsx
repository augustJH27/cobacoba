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
                    <br />
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
                    <Link to='/news'>
                    <SidebarRoute to="/news" onClick={toggle}>
                        NEWS
                    </SidebarRoute>
                    </Link>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
