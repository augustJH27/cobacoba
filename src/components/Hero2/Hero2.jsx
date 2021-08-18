import React from 'react';
import styled from 'styled-components';

// import SpeakerZX9 from './Speaker_ZX9';
// import SpeakerZX7 from './Speaker_ZX7';
// import EarphonesYX1 from './Earphones_YX1';


const Hero2 = () => {
  return (
    <Wrapper className='container'>
      <h2>Speaker Page</h2>
      {/* <SpeakerZX9 />
      <SpeakerZX7 />
      <EarphonesYX1 /> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h2 {
    display: none;
  }
`;

export default Hero2;
