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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          saepe beatae a qui architecto repellat ipsam fugiat blanditiis cumque
          dolor.
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
  gap: 1.2rem;
  height: 210px;

  /* image styles */

  .book-card__image {
    grid-area: 1 / 1 / 2 / 2;
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
