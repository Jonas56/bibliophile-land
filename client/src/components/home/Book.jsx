import styled from "styled-components";

const Book = ({ book }) => {
  return (
    <Container>
      <img src={book.image_link} alt={book.title} />
      <span className="book-title">{book.title}</span>
    </Container>
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
    height: 205px;
    width: 130px;
    border-radius: 5px;
  }
  .book-title {
    font-size: 14px;
  }
  * {
    cursor: pointer;
  }
`;
