import styled from "styled-components";
import Book from "./Book";

const BooksSlider = ({ books, title }) => {
  return (
    <BooksSection>
      <div className="section-header">
        <span className="section-title">{title}</span>
        <span className="section-button">See more</span>
      </div>

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
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .section-title {
      font-size: 18px;
    }
    .section-button {
      font-size: 15px;
      padding-bottom: 3px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-right: 1rem;
      :hover {
        border-bottom: 1px solid white;
      }
    }
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
