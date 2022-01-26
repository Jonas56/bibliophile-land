import styled from "styled-components";

const ProfileSection = ({ books, loading }) => {
  // const books = [
  //   {
  //     url: "./assets/book.jpg",
  //     title: "Memory",
  //   },
  //   {
  //     url: "./assets/book.jpg",
  //     title: "Memory",
  //   },
  //   {
  //     url: "./assets/book.jpg",
  //     title: "Memory",
  //   },
  //   {
  //     url: "./assets/book.jpg",
  //     title: "Memory",
  //   },
  // ];
  const url = "./assets/book.jpg";
  return (
    <Container>
      <ProfileInfo>
        <Profile>
          <Photo>
            <img src="/assets/obito.jpg" alt="" />
          </Photo>
          <Info>
            <Name>Moussaab</Name>
            <Username>@marcos</Username>
            <Followers>Following: 69</Followers>
          </Info>
        </Profile>
        <Readbooks>
          <Title>Books Read</Title>
          <Number>69</Number>
        </Readbooks>
        <Readbooks>
          <Title>Books Read</Title>
          <Number>69</Number>
        </Readbooks>
        <Readbooks>
          <Title>Books Read</Title>
          <Number>69</Number>
        </Readbooks>
      </ProfileInfo>
      <BooksSection>
        <FavBooks>
          <span>Favorite Books</span>
          {loading ? (
            <p>Loading ..</p>
          ) : (
            <Books>
              {books.map((book, index) => (
                <Book key={index}>
                  <img
                    src={book.image_link ? book.image_link : url}
                    alt={book.title}
                  />
                  <span>{book.title}</span>
                </Book>
              ))}
            </Books>
          )}
        </FavBooks>
        <OtherBooks>
          <span>Other Books</span>
          <Books>
            {books.map((book, index) => (
              <Book key={index}>
                <img src={url} alt={book.title} />
                <span>{book.title}</span>
              </Book>
            ))}
          </Books>
        </OtherBooks>
      </BooksSection>
    </Container>
  );
};

export default ProfileSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;

  height: 100%;
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.7rem;
`;
const Profile = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  min-width: 100%;
  padding-left: 2.4rem;
  padding-top: 1.3rem;

  /* @media screen and (max-width: 1024px) {
    padding-left: 0.7rem;
  } */
`;
const Photo = styled.div`
  width: 100px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-self: flex-end;
  margin-right: auto;
  margin-left: 0.8rem;
`;
const Name = styled.span`
  font-size: 18px;
`;
const Username = styled.span`
  font-size: 15px;
`;
const Followers = styled.span`
  font-size: 13px;
`;

const Readbooks = styled.div`
  width: 87%;
  height: 45px;
  background-color: goldenrod;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
const Title = styled.span``;
const Number = styled.span``;

/************** */

const BooksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const FavBooks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const Books = styled.div`
  display: flex;
  align-items: stretch;

  gap: 1rem;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Book = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.4rem;
  flex-direction: column;

  img {
    width: 110px;
    height: 170px;
    border-radius: 5px;
  }
  span {
    font-size: 12px;
  }
  * {
    cursor: pointer;
  }
`;
const BookTitle = styled.span`
  font-size: 12px;
`;
const OtherBooks = styled(FavBooks)``;
