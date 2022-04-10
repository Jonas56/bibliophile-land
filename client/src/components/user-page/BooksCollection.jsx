import styled from "styled-components";
import Book from "../home/BookSliderCard";

const BooksCollection = ({ title, books }) => {
  return books?.status === "loading" ? (
    <p>Loading..</p>
  ) : (
    <Container>
      <span className="read-books_title">{title}</span>
      <Books>
        {" "}
        {books?.list.map((book, index) => (
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
  justify-content: center;
  gap: 1rem;

  .read-books_title {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and (max-width: 1280px) {
    align-items: center;
  }
`;

const Books = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: stretch;
  max-height: 100%;
  flex-wrap: wrap;
`;
