import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import BookDetails from "../components/book-page/BookDetails";
import Suggestions from "../components/book-page/suggestions/Suggestions";

const BookPage = () => {
  const { bookid } = useParams();
  const [books, setBooks] = useState([]);
  const [bookById, setBookById] = useState(null);
  const getBookById = async () => {
    await axios
      .get("/v1/api/books/" + bookid)
      .then((response) => {
        console.log(response);
        setBookById(response.data);
      })
      .catch((e) => console.log(e));
  };

  const getBooks = async () => {
    await axios
      .get("/v1/api/books/")
      .then((response) => {
        console.log(response);
        setBooks(response.data.rows);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getBooks();
    getBookById();
  }, [bookid]);

  return (
    <Container>
      {bookById !== null ? <BookDetails book={bookById} /> : <p>Loading</p>}
      <Suggestions books={books} />
    </Container>
  );
};

export default BookPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #141a1f;
  border-radius: 5px;
  padding: 1.2rem 1.7rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: auto;
  }
  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
