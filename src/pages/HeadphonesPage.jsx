import React from 'react';
import styled from 'styled-components';
import PageHero from '../components/PageHero/PageHero';
import Catalog from '../components/CatalogCard/Catalog';
import Bringing from '../components/Bringing/Bringing';
import Headphone from '../components/CatalogCard/Headphone';

const HeadphonesPage = () => {
  return (
    <Wrapper>
      <PageHero name={'headphones'} />
      <Container>
        <Headphone />
        <Catalog />
        <Bringing />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-bottom: 7.5rem;
  @media screen and (min-width: 1280px) {
    padding-bottom: 10rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
  @media screen and (min-width: 768px) {
    gap: 6rem;
  }
  @media screen and (min-width: 1280px) {
    gap: 10.5rem;
  }
`;

export default HeadphonesPage;