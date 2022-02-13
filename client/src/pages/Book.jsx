import React from "react";
import styled from "styled-components";

const Book = () => {
  return (
    <Container>
      <BookInfo></BookInfo>
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
`;
const BookInfo = styled.div`
  grid-area: 1 / 1 / 6 / 3;
  background-color: white;
  width: 100%;
  height: 100%;
`;
const Suggetions = styled.div`
  grid-area: 1 / 3 / 6 / 4;
  background-color: pink;
  width: 100%;
  height: 100%;
`;
