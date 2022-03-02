import React from "react";
import styled from "styled-components";

const BookCard = ({ book }) => {
  const { title, image_link } = book;

  return (
    <Container>
      <div className="book-card__image">
        <img src={image_link} alt={title} />
      </div>
      <div className="book-card__info">
        <h3 className="book-card__title">{title}</h3>
        <p className="book-card__desc">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
      </div>
    </Container>
  );
};

export default BookCard;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 0.8rem;
  height: 210px;

  /* image styles */

  .book-card__image {
    grid-area: 1 / 1 / 2 / 2;

    img {
      height: 205px;
      width: 130px;
    }
  }

  /* infos styles */
  .book-card__info {
    grid-area: 1 / 2 / 2 / 4;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;

    h3 {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0em;
    }

    p {
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 20px;
      letter-spacing: 0em;
    }
  }
`;
