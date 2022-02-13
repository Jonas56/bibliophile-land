import React from "react";
import styled from "styled-components";

const Book = () => {
  return (
    <Container>
      <BookInfo>
        <Info>
          <div className="book-image">
            <img src="./assets/book.jpg" alt="" />
          </div>
          <div className="book-info">
            <div className="book-info__title">Book </div>
            <p className="book-info__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae non eius voluptatum ab reiciendis consequatur possimus
              sed optio repudiandae quisquam.
            </p>
            <div className="book-info__buttons">btn</div>
          </div>
        </Info>
        <Details>test</Details>
      </BookInfo>
      <Suggetions></Suggetions>
    </Container>
  );
};

export default Book;

const Container = styled.div`
  width: 100%;
  background-color: #141a1f;
  border-radius: 5px;
  min-height: 80vh;
  padding: 1.2rem 1.7rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);

  @media screen and (max-width: 1280px) {
    display: flex;
    gap: 1.5rem;
  }
`;
const BookInfo = styled.div`
  grid-area: 1 / 1 / 6 / 3;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
`;
const Info = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2.2rem;

  .book-image {
    grid-area: 1 / 1 / 4 / 2;
    img {
      width: 237px;
      height: 359px;
    }
  }

  .book-info {
    grid-area: 1 / 2 / 4 / 4;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
const Details = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`;
const Suggetions = styled.div`
  grid-area: 1 / 3 / 6 / 4;
  background-color: pink;
  width: 100%;
  height: 100%;
`;
