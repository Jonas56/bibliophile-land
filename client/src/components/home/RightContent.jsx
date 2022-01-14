import styled from "styled-components";

const RightContent = () => {
  return (
    <Container>
      <BooksSection>
        <span>Trending</span>
        <Books>
          <Book>
            <img src="./assets/book.jpg" alt="Memory" />
            <span>Memory</span>
          </Book>
          <Book>
            <img src="./assets/book.jpg" alt="Memory" />
            <span>Memory</span>
          </Book>
          <Book>
            <img src="./assets/book.jpg" alt="Memory" />
            <span>Memory</span>
          </Book>
          <Book>
            <img src="./assets/book.jpg" alt="Memory" />
            <span>Memory</span>
          </Book>
          <Book>
            <img src="./assets/book.jpg" alt="Memory" />
            <span>Memory</span>
          </Book>
          <Book>
            <img src="./assets/book.jpg" alt="Memory" />
            <span>Memory</span>
          </Book>
        </Books>
      </BooksSection>
      <BooksSection>
        <span>Best Sellers</span>
        <Books>
          <Book>
            <img src="./assets/book.jpg" alt="Memory" />
            <span>Memory</span>
          </Book>
          <Book>
            <img src="./assets/book.jpg" alt="Memory" />
            <span>Memory</span>
          </Book>
          <Book>
            <img src="./assets/book.jpg" alt="Memory" />
            <span>Memory</span>
          </Book>
          <Book>
            <img src="./assets/book.jpg" alt="Memory" />
            <span>Memory</span>
          </Book>
          <Book>
            <img src="./assets/book.jpg" alt="Memory" />
            <span>Memory</span>
          </Book>
          <Book>
            <img src="./assets/book.jpg" alt="Memory" />
            <span>Memory</span>
          </Book>
        </Books>
      </BooksSection>
      <AuthorSection>
        <span>Authors</span>
        <Authors>
          <Author>
            <img src="./assets/obito.jpg" alt="Obito Uchiha" />
            <span>Obito</span>
          </Author>
          <Author>
            <img src="./assets/obito.jpg" alt="Obito Uchiha" />
            <span>Obito</span>
          </Author>
          <Author>
            <img src="./assets/obito.jpg" alt="Obito Uchiha" />
            <span>Obito</span>
          </Author>
          <Author>
            <img src="./assets/obito.jpg" alt="Obito Uchiha" />
            <span>Obito</span>
          </Author>
          <Author>
            <img src="./assets/obito.jpg" alt="Obito Uchiha" />
            <span>Obito</span>
          </Author>
          <Author>
            <img src="./assets/obito.jpg" alt="Obito Uchiha" />
            <span>Obito</span>
          </Author>
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
  gap: 3rem;
`;

const BooksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  span {
    font-size: 18px;
  }
`;

const Books = styled.div`
  display: flex;
  gap: 1rem;
`;

const Book = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  img {
    height: 210px;
    width: 140px;
  }
  span {
    font-size: 15px;
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
