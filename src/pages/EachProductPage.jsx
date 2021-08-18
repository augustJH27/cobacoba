import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../helpers/context';
import ButtonBack from '../components/ButtonBack/ButtonBack';
import Details from '../components/Product/Detail';
import Gallery from '../components/Product/Gallery';
import Description from '../components/Product/Desc';
import Proposal from '../components/Product/Proposal'
import Catalog from '../components/CatalogCard/Catalog';
import Bringing from '../components/Bringing/Bringing';
import styled from 'styled-components';

const SingleProductPage = () => {
  let { id } = useParams();
  const { single_product, getSingleProduct } = useGlobalContext();

  useEffect(() => {
    getSingleProduct(id);
  });
  // }, [id]);

  return (
    <Main>
      <div className='container'>
        <ButtonBack />
      </div>
      <Container className='container'>
        <Details {...single_product} />
        <Description {...single_product} />
        <Gallery {...single_product} />
        <Proposal {...single_product} />
        <Catalog />
        <Bringing />
      </Container>
    </Main>
  );
};

const Main = styled.main`
  padding-top: 1rem;
  @media screen and (min-width: 768px) {
    padding-top: 2rem;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 5rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;
  padding-top: 1.5rem;
  padding-bottom: 7.5rem;
  @media screen and (min-width: 768px) {
    gap: 7.5rem;
  }
  @media screen and (min-width: 1280px) {
    gap: 10rem;
    padding-top: 3.5rem;
    padding-bottom: 10rem;
  }
`;

export default SingleProductPage;
