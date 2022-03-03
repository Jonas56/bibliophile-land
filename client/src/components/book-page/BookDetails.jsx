import React from "react";
import styled from "styled-components";

const BookDetails = () => {
  return (
    <Container>
      {/* <BookDetails book={book}/>  */}
      <Info>
        <div className="book-image">
          <img src="./assets/book.jpg" alt="" />
        </div>
        <div className="book-info">
          <h1 className="book-info__title">Book </h1>
          <p className="book-info__description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters. It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters.
          </p>
          <div className="book-info__buttons">btn</div>
        </div>
      </Info>
      <Details>test</Details>
    </Container>
  );
};

export default BookDetails;

const Container = styled.div`
  grid-area: 1 / 1 / 5 / 3;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  @media screen and (max-width: 1280px) {
    grid-area: 1 / 1 / 3 / 4;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
const Info = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;

  .book-image {
    grid-area: 1 / 1 / 4 / 2;
    img {
      width: 237px;
      height: 359px;
      border-radius: 5px;
    }
  }

  .book-info {
    grid-area: 1 / 2 / 4 / 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 1rem;

    h1 {
      font-weight: 500;
      font-size: 24px;
    }
    p {
      font-weight: 300;
      line-height: 20px;
      font-size: 1rem;
    }
    .book-info__buttons {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  @media screen and (max-width: 1280px) {
    grid-area: 1 / 1 / 2 / 4;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    .book-image {
      grid-area: 1 / 1 / 2 / 2;
    }
    .book-info {
      grid-area: 1 / 2 / 2 / 4;
    }
  }
  @media screen and (max-width: 780px) {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    .book-info {
      justify-content: center;
      align-items: center;
      gap: 1.3rem;
    }
  }
`;
const Details = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  height: 100%;
  display: grid;
  place-items: center;
  place-content: center;
  @media screen and (max-width: 1280px) {
    grid-area: 2 / 1 / 3 / 4;
  }
`;
