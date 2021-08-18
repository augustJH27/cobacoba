import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SpeakerMobile from '../assets/home/mobile/image-speaker-zx7.jpg';
import SpeakerTablet from '../assets/home/tablet/image-speaker-zx7.jpg';
import SpeakerDesktop from '../assets/home/desktop/image-speaker-zx7.jpg';

import { scrollToTop } from '../../helpers/constants';

const Speaker_ZX7 = () => {
  const width = window.innerWidth;
  return (
    <Wrapper
      style={
        width >= 1280
          ? { backgroundImage: `url(${SpeakerDesktop})` }
          : width >= 768
          ? { backgroundImage: `url(${SpeakerTablet})` }
          : { backgroundImage: `url(${SpeakerMobile})` }
      }
    >
      <h4>zx7 speaker</h4>
      <Link to='/product/5' className='btn-2' onClick={scrollToTop}>
        see product
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 6.5rem 1.5rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: var(--radius);
  h4 {
    margin-bottom: 2rem;
  }
  a {
    background-color: transparent;
  }
  @media screen and (min-width: 768px) {
    padding: 6.5rem 3.875rem;
  }
  @media screen and (min-width: 1280px) {
    padding: 6.5rem 6rem;
  }
`;

export default Speaker_ZX7;
