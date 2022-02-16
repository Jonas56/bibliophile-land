import styled from "styled-components";
import Book from "./Book";

const BooksSlider = ({ books, title }) => {
  return (
    <BooksSection>
      <span>{title}</span>
      <Books>
        {books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </Books>
    </BooksSection>
  );
};

export default BooksSlider;

const BooksSection = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  gap: 1.3rem;
  flex: 1;
  span {
    font-size: 18px;
  }
`;

const Books = styled.div`
  display: flex;
  gap: 3rem;
  align-items: stretch;
  max-height: 100%;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
