import React from 'react';
import Each from './Each';
import data from '../../helpers/speakers';
import styled from 'styled-components';

const Speaker = () => {
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

export default Speaker;