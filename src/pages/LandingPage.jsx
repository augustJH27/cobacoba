import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero/Hero';
// import Hero2 from '../components/Hero2/Hero2';
// import Catalog from '../components/CatalogCard/Catalog';
// import Bringing from '../components/Bringing/Bringing'

function LandingPage() {
  return (
    <main>
    <Hero />
    <Container>
      {/* <Catalog />
      <Hero2 />
      <Bringing /> */}
    </Container>
  </main>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
  margin-bottom: 7.5rem;
  @media screen and (min-width: 768px) {
    gap: 6rem;
    margin-bottom: 6rem;
  }
  @media screen and (min-width: 1280px) {
    gap: 10.5rem;
    margin-bottom: 12.5rem;
  }
`;

export default LandingPage;