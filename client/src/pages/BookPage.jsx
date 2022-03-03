import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import BookDetails from "../components/book-page/BookDetails";
import Suggestions from "../components/book-page/suggestions/Suggestions";

const BookPage = () => {
  const [books, setBooks] = useState([]);
  const getBooks = () => {
    axios
      .get("v1/api/books")
      .then((response) => {
        console.log(response);
        setBooks(response.data.rows);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Container>
      <BookDetails />
      <Suggestions books={books} />
    </Container>
  );
};

export default BookPage;

const Container = styled.div`
  width: 100%;
  background-color: #141a1f;
  border-radius: 5px;
  padding: 1.2rem 1.7rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;
