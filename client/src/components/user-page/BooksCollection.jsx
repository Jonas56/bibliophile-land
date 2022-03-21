import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Book from "../home/BookSliderCard";

const BooksCollection = ({ title }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBooks = async () => {
    await axios
      .get("/v1/api/reading/")
      .then((response) => {
        setBooks(response.data.reading);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getBooks();
  }, [loading]);

  return loading ? (
    <p>Loading..</p>
  ) : (
    <Container>
      <span className="read-books_title">{title}</span>
      <Books>
        {" "}
        {books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </Books>
    </Container>
  );
};

export default BooksCollection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .read-books_title {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`;

const Books = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: stretch;
  max-height: 100%;
  flex-wrap: wrap;
`;
