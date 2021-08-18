import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { scrollToTop } from '../../helpers/constants';

const CategoryCard = ({ img, text, url }) => {
  return (
    <ListItem>
      <img src={img} alt={text} />
      <div className='card'>
        <h6 className='card__title'>{text}</h6>
        <Link
          className='btn-3'
          to={url}
          onClick={() => {
            scrollToTop();
          }}
        >
          Shop
        </Link>
      </div>
    </ListItem>
  );
};

const ListItem = styled.li`
  position: relative;
  text-align: center;
  padding-top: 20%;
  img {
    max-width: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .card {
    padding-top: 25%;
    background-color: var(--clr-base);
    border-radius: var(--radius);
    &__title {
      font-size: var(--fs-base);
      margin-bottom: 1rem;
    }
  }
`;

export default CategoryCard;
