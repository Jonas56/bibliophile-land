import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import BookDetails from "../components/book-page/BookDetails";
import VerticalBooksSlider from "../components/book-page/suggestions/VerticalBooksSlider";
import { getAllBooks, selectAllBooks } from "../redux/slices/booksSlice";
import { getReadBooks, selectReadBooks } from "../redux/slices/userSlice";

const BookPage = () => {
  /* redux */
  // get all books
  const reduxBooks = useSelector(selectAllBooks);
  const { status, books } = reduxBooks;
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllBooks());
    }
  }, [dispatch, status]);

  // get read books
  const { readBooks } = useSelector(selectReadBooks);
  console.log(reduxBooks);
  useEffect(() => {
    if (readBooks.status === "idle") {
      dispatch(getReadBooks());
    }
  }, [dispatch, readBooks.status]);

  // get book by id from url
  const { bookid } = useParams();
  const [bookById, setBookById] = useState(null);

  const getBookById = async () => {
    await axios
      .get("/v1/api/books/" + bookid)
      .then((response) => {
        setBookById(response.data);
      })
      .catch((e) => console.log(e));
  };

  // to check if the book is read
  const checkReadBook = (id) => {
    console.count("here");
    const book_index = readBooks.list.findIndex((item) => id === item.id);
    if (book_index > 0) {
      return true;
    }
    return false;
  };
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
