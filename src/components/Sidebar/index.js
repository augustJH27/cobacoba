import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/home" onClick={toggle}>
                        HOME
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        ABOUT US
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        JOIN US
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        MEASURE
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        DESIGN
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        UPCYCLE
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        NEWS
                    </SidebarLink>
                    <SidebarLink to="/signin" onClick={toggle}>
                        Log in
                    </SidebarLink>
                    <SidebarLink to="/signup" onClick={toggle}>
                        Create Account
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
