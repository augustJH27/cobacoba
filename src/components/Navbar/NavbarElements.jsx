import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    background-color: ${({ scrollNav }) => (scrollNav ? '#fff' : 'transparent')};
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: ${({ scrollNav }) => (scrollNav ? '0px 1px 2px 0px #000' : 'none')};

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
        
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    align-items: center;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
    color: #000;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    margin: 0 auto;
    font-weight: bold;
    text-decoration: none;
    flex: 1;
`;

export const MobileIcon = styled.div`
        display: flex;
        /* margin-left: 20px; */
        margin-top: 2px;
        /* position: absolute; */
        /* top: 0; */
        /* transform: translate(-100%, 60%); */
        font-size: 1.4rem;
        cursor: pointer;
        color: #00af91;
        flex: 1;

    /* @media screen and (max-width: 768px) {
        display: flex;
        margin-left: 20px;
        margin-top: 2px;
        position: absolute;
        top: 0;
        transform: translate(-100%, 60%);
        font-size: 1.4rem;
        cursor: pointer;
        color: #00af91;
    } */
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 60px;
`;

export const NavLinks = styled(LinkScroll)`
    color:#000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #434645;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;

    /* @media screen and (max-width: 768px) {
        display: none;
    } */
`;

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 0px;
    background: #fff;
    white-space: nowrap;
    padding: 10px 22px;
    color: #000;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #000;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

//default
export const NavBtnLink1 = styled(LinkRouter)`
    border-radius: 0px;
    background: transparent;
    white-space: nowrap;
    padding: 10px 22px;
    color: #000;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: transparent;
        color: #000;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

//for customer
export const NavBtnLink2 = styled(LinkRouter)`
    border-radius: 0px;
    background: transparent;
    white-space: nowrap;
    padding: 10px 22px;
    color: #000;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: transparent;
        color: #000;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;