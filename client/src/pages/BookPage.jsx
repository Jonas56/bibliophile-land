import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import BookDetails from "../components/book-page/BookDetails";
import BooksSlider from "../components/home/BooksSlider";
import BookCard from "../components/book-page/suggestions/BookCard";

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
    // .finally(() => setLoading(false));
  };
  useEffect(() => {
    getBooks();
  }, []);

  const [windowWidth, setWindowWidth] = useState(0);

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <Container>
      <BookDetails />

      <Suggestions>
        {windowWidth > 1280 ? (
          <>
            <h2>Similar Books</h2>
            <div className="books-section">
              {books.slice(3, 8).map((book) => (
                <BookCard book={book} />
              ))}
            </div>
          </>
        ) : (
          <BooksSlider books={books} title={"Similar Books"} />
        )}
      </Suggestions>
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

const Suggestions = styled.div`
  grid-area: 1 / 3 / 5 / 4;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #0d1117;
  border-radius: 5px;
  padding: 1.3rem 2rem;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  h2 {
    font-size: 20px;
    font-weight: 500;
  }
  .books-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    .books-section__book {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      p {
        font-size: 16px;

        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
      }
      h3 {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    grid-area: 3 / 1 / 4 / 4;
    background-color: transparent;
  }
`;
