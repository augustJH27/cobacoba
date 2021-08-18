import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CatalogCard from '../CatalogCard/CatalogCard';
import { categories } from '../../helpers/link';

const SidebarLinks = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to='/'><h4>HOME</h4></Link>
          <Link to='/'><h4>ABOUT</h4></Link>
          <Link to='/'><h4>MEASURE</h4></Link>
          <Link to='/'><h4>DESIGN</h4></Link>
          <Link to='/'><h4>UPCYCLE</h4></Link>
          <Link to='/'><h4>NEWS</h4></Link>
          <h5>Log in</h5>
          <Link to='/create-account'><h6>Create account</h6></Link>
        </li>
      </ul>
      {/* {categories.map((category) => {
        return (
          <CatalogCard className='card' key={category.id} {...category} />
        );
      })} */}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  padding: 2rem 1.5rem;
  background-color: var(--clr-white);
  height: 900px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  overflow: auto;
  @media screen and (min-width: 768px) {
    min-height: 0;
    padding-top: 3.5rem;
    padding-bottom: 4rem;
    gap: 0.625rem;
  }

  h4 {
    justify-content: center;
    font-family: 'Lato';
    text-align: center;
    margin: 30px 10px;
  }

  h5 {
    font-size: 16px;
    font-family: 'Lato';
    justify-content: center;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 10px;
  }

  h6 {
    font-size: 14px;
    justify-content: center;
    text-align: center;
    margin: 5px;
  }
`;

export default SidebarLinks;