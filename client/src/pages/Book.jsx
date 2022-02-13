import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Book = () => {
  const [books, setBooks] = useState([]);
  const getBooks = () => {
    axios
      .get("v1/api/books")
      .then((response) => {
        console.log(response);
        setBooks(response.data.rows);
      })
      .catch((e) => console.log(e));
    // .finally(() => setLoading(false));
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <Container>
      <BookInfo>
        <Info>
          <div className="book-image">
            <img src="./assets/book.jpg" alt="" />
          </div>
          <div className="book-info">
            <div className="book-info__title">Book </div>
            <p className="book-info__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae non eius voluptatum ab reiciendis consequatur possimus
              sed optio repudiandae quisquam.
            </p>
            <div className="book-info__buttons">btn</div>
          </div>
        </Info>
        <Details>test</Details>
      </BookInfo>
      <Suggetions>
        <h2>Similar Books</h2>
        <div className="books-section">
          {books.map((book) => {
            <div key={book.title}>
              <h3>{book.title}</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate saepe beatae a qui architecto repellat ipsam fugiat
                blanditiis cumque dolor. Id iste possimus repellat, enim velit
                corporis amet quidem reprehenderit?
              </p>
            </div>;
          })}
        </div>
      </Suggetions>
    </Container>
  );
};

export default Book;

const Container = styled.div`
  width: 100%;
  background-color: #141a1f;
  border-radius: 5px;
  padding: 1.2rem 1.7rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    display: flex;
    gap: 1.5rem;
    align-content: center;
    justify-content: center;
  }
`;
const BookInfo = styled.div`
  grid-area: 1 / 1 / 6 / 3;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  @media screen and (max-width: 1280px) {
    flex: 1;
  }
`;
const Info = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;

  .book-image {
    grid-area: 1 / 1 / 4 / 2;
    img {
      width: 237px;
      height: 359px;
    }
  }

  .book-info {
    grid-area: 1 / 2 / 4 / 4;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-right: 1rem;
  }
`;
const Details = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`;
const Suggetions = styled.div`
  grid-area: 1 / 3 / 6 / 4;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  align-items: center;
  .books-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 1280px) {
    flex: 1;
  }
  overflow-x: auto;
`;
