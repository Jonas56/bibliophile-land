import styled from "styled-components";

const RightContent = ({ books, loading, authors }) => {
  const url = "./assets/book.jpg";
  return (
    <Container>
      <BooksSection>
        <span>Trending</span>
        <Books>
          {books.map((book, index) => (
            <Book key={index}>
              <img src={url} alt={book.title} />
              <span>{book.title}</span>
            </Book>
          ))}
        </Books>
      </BooksSection>
      <BooksSection>
        <span>Best Sellers</span>
        <Books>
          {books.map((book, index) => (
            <Book key={index}>
              <img src={url} alt={book.title} />
              <span>{book.title}</span>
            </Book>
          ))}
        </Books>
      </BooksSection>
      <AuthorSection>
        <span>Authors</span>
        <Authors>
          {authors.map((author, index) => (
            <Author key={index}>
              <img src="./assets/obito.jpg" alt={author.name} />
              <span>{author.name}</span>
            </Author>
          ))}
        </Authors>
      </AuthorSection>
    </Container>
  );
};

export default RightContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  gap: 2rem;
`;

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
  gap: 1rem;
  align-items: stretch;
  max-height: 100%;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Book = styled.div`
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
  span {
    font-size: 14px;
  }
  * {
    cursor: pointer;
  }
`;

const AuthorSection = styled(BooksSection)``;

const Authors = styled(Books)`
  gap: 2rem;
`;

const Author = styled(Book)`
  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
`;
