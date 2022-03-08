import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BooksSlider from "../../home/BooksSlider";
import BookCard from "./VerticalBookCard";

const Suggestions = ({ books, title }) => {
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
      {windowWidth > 1280 ? (
        <>
          <h2>Similar Books</h2>
          <div className="vertical-books-section">
            {books.slice(3, 8).map((book) => (
              <Link to={`/books/${book.id}`} key={book.title}>
                <BookCard book={book} />
              </Link>
            ))}
          </div>
        </>
      ) : (
        <BooksSlider books={books} title={"Similar Books"} />
      )}
    </Container>
  );
};

export default Suggestions;

const Container = styled.div`
  grid-area: 1 / 3 / 3 / 4;
  width: 100%;
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
  .vertical-books-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    .vertical-books-section__book {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      p {
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;
      }
      h3 {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    grid-area: 3 / 1 / 4 / 4;
    background-color: transparent;
    padding: 0;
  }
  @media screen and (max-width: 780px) {
    flex: 1;
  }
`;
