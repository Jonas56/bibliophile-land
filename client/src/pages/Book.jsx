import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import BooksSlider from "../components/home/BooksSlider";
import BookCard from "../components/single-book/suggestions/BookCard";

const Book = () => {
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
      <BookInfo>
        <Info>
          <div className="book-image">
            <img src="./assets/book.jpg" alt="" />
          </div>
          <div className="book-info">
            <h1 className="book-info__title">Book </h1>
            <p className="book-info__description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters. It is a long established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters.
            </p>
            <div className="book-info__buttons">btn</div>
          </div>
        </Info>
        <Details>test</Details>
      </BookInfo>
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
          <BooksSlider books={books} />
        )}
      </Suggestions>
    </Container>
  );
};

export default Book;

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
const BookInfo = styled.div`
  grid-area: 1 / 1 / 5 / 3;
  width: 100%;
  height: 389px;
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
`;
const Details = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  @media screen and (max-width: 1280px) {
    grid-area: 2 / 1 / 3 / 4;
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
  }
`;
