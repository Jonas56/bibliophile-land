import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import BooksSlider from "../../home/BooksSlider";
import BookCard from "./BookCard";

const Suggestions = ({ books }) => {
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
          <div className="books-section">
            {books.slice(3, 8).map((book) => (
              <BookCard book={book} />
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
    background-color: transparent;
  }
`;
