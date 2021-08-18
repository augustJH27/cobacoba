import React from 'react';
import Each from './Each';
import data from '../../helpers/headphones';
import styled from 'styled-components';

const Headphone = () => {
  return (
    <Wrapper className='container'>
      {data.map((item) => {
        return <Each key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
  @media screen and (min-width: 1280px) {
    gap: 10rem;
  }
`;

export default Headphone;