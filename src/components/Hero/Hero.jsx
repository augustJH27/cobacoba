import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import mobileImage from '../assets/home/mobile/image-header.jpg';
import tabletImage from '../assets/home/tablet/image-header.jpg';
import desktopImage from '../assets/home/desktop/image-hero.jpg';

const Hero = () => {
  const width = window.innerWidth;
  return (
    <HeroSection
      style={
        width >= 1280
          ? { backgroundImage: `url(${desktopImage})` }
          : width >= 768
          ? { backgroundImage: `url(${tabletImage})` }
          : { backgroundImage: `url(${mobileImage})` }
      }
    >
      <HeroContainer className='container'>
        <div>
          <div>
          <h2>Craft my clothes</h2>
          <Link to='/' className='btn-12'>
            Customer
          </Link>
          </div>
          <div>
          <h1>Reach <br />customers</h1>
          <Link to='/' className='btn-1'>
            Supplier
          </Link>
          </div>
        </div>
      </HeroContainer>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-bottom: 2.5rem;
  @media screen and (min-width: 768px) {
    background-position: center !important;
    background-size: cover;
    margin-bottom: 6rem;
  }
  @media screen and (min-width: 1280px) {
    background-position: 0 100% !important;
    margin-bottom: 7.5rem;
  }
`;
const HeroContainer = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  min-height: calc(100vh - 5rem);
  text-align: center;
  color: var(--clr-white);
  span {
    display: inline-block;
    text-transform: uppercase;
    opacity: 0.5;
    letter-spacing: var(--ls-mili);
    font-size: var(--fs-micro);
    line-height: var(--lh-mili);
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--clr-white);
    text-align: left;
    justify-content: left;

  }
  h2 {
    text-align: right;
    justify-content: right;
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
    margin-left: 30rem;
    color: var(--clr-black);
  }
  @media screen and (min-width: 768px) {
    span {
      margin-bottom: 1.5rem;
    }
    h1 {
      font-size: var(--fs-h1);
      line-height: var(--lh-h1);
      margin-bottom: 1.5rem;
    }
    h2 {
      font-size: var(--fs-h2);
      line-height: var(--lh-h2);
      margin-left: 40rem;
    }
  }
  @media screen and (min-width: 1280px) {
    /* text-align: left; */
    text-align: inherit;
    h1 {
      max-width: 55%;
    }
    h2 {
      max-width: 55%;
    }
  }
`;

export default Hero;