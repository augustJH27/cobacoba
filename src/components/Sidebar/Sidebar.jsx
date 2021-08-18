import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../helpers/context';
import SidebarContent from './SidebarContent';

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <Wrapper className={`${isSidebarOpen ? 'show-sidebar shadow' : 'close-sidebar'}`}>
      <SidebarContent />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  transition: var(--burger-transition);
  /* transform: translateX(-100vw); */
  position: absolute;
  top: 5.625rem;
  left: 0;
  right: 0;
  z-index: 999;
  overflow: auto;

  /* @media screen and (min-width: 992px) {
    display: none;
  } */

  /* text-decoration: underline; */
  //dipake untuk teks sorot di list home

  &.close-sidebar {
    opacity: 0;
  }
  &.show-sidebar {
    /* transform: translateX(0); */
    /* opacity: 0; */
    animation: fadeIn 1s ease-in-out 3s forwards;
    -webkit-animation: fadeIn 1s forwards;
    -moz-animation: fadeIn 1s forwards;
    -o-animation: fadeIn 1s forwards;
    -ms-animation: fadeIn 1s forwards;
    @keyframes fadeIn {
  0% 
  {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
  }
`;


export default Sidebar;