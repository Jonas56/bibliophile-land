import styled from "styled-components";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`/books/${book.id}`}>
      <Container>
        <img src={book.image_link} alt={book.title} />
        <span className="book-title">{book.title}</span>
      </Container>
    </Link>
  );
};

export default Book;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.4rem;
  img {
    height: 216px;
    width: 140px;
    border-radius: 3px;
  }
  .book-title {
    font-size: 14px;
    text-align: center;
  }
  * {
    cursor: pointer;
  }
`;
