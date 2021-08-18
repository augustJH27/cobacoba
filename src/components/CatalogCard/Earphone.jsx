import React from 'react';
import Each from './Each';
import data from '../../helpers/earphones';
import styled from 'styled-components';

const Earphone = () => {
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
`;

export default Earphone;