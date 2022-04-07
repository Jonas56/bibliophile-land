import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import BookDetails from "../components/book-page/BookDetails";
import VerticalBooksSlider from "../components/book-page/suggestions/VerticalBooksSlider";
import { getAllBooks, selectAllBooks } from "../redux/slices/booksSlice";

const BookPage = () => {
  /* redux */
  const reduxBooks = useSelector(selectAllBooks);
  const { status, books } = reduxBooks;
  const dispatch = useDispatch();
  console.log(reduxBooks);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllBooks());
    }
  }, [dispatch, status]);

  const { bookid } = useParams();
  const [readBooks, setReadBooks] = useState([]);
  const [bookById, setBookById] = useState(null);

  const getBookById = async () => {
    await axios
      .get("/v1/api/books/" + bookid)
      .then((response) => {
        setBookById(response.data);
      })
      .catch((e) => console.log(e));
  };

  const getReadBooks = async () => {
    await axios
      .get("/v1/api/reading/")
      .then((response) => {
        setReadBooks(response.data.reading);
      })
      .catch((e) => console.log(e));
  };

  const checkReadBook = (id) => {
    console.count("here");
    const book_index = readBooks.findIndex((item) => id === item.id);
    if (book_index > 0) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    getReadBooks();
  }, []);

  useEffect(() => {
    getBookById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookid]);

  return (
    <Container>
      {bookById ? (
        <BookDetails book={bookById} checkReadBook={checkReadBook} />
      ) : (
        <p>Loading</p>
      )}
      <VerticalBooksSlider books={books} />
    </Container>
  );
};

export default BookPage;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #141a1f;
  border-radius: 5px;
  padding: 1.2rem 1.7rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 465px);
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 0.5fr 0.5fr;
    height: auto;
  }
  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
