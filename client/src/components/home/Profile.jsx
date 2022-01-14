import styled from "styled-components";

const ProfileSection = () => {
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
          <Books>
            <Book>
              <img src="/assets/book.jpg" />
              <BookTitle>Memories</BookTitle>
            </Book>
            <Book>
              <img src="/assets/book.jpg" />
              <BookTitle>Memories</BookTitle>
            </Book>
            <Book>
              <img src="/assets/book.jpg" />
              <BookTitle>Memories</BookTitle>
            </Book>
            <Book>
              <img src="/assets/book.jpg" />
              <BookTitle>Memories</BookTitle>
            </Book>
          </Books>
        </FavBooks>
        <OtherBooks>
          <span>Other Books</span>
          <Books>
            <Book>
              <img src="/assets/book.jpg" />
              <BookTitle>Memories</BookTitle>
            </Book>
            <Book>
              <img src="/assets/book.jpg" />
              <BookTitle>Memories</BookTitle>
            </Book>
            <Book>
              <img src="/assets/book.jpg" />
              <BookTitle>Memories</BookTitle>
            </Book>
            <Book>
              <img src="/assets/book.jpg" />
              <BookTitle>Memories</BookTitle>
            </Book>
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
  width: 100%;
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
  width: 100%;
  padding-left: 2.4rem;
  padding-top: 1.3rem;
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
  align-items: center;
  gap: 1rem;
`;
const Book = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-direction: column;

  img {
    width: 100px;
    height: 170px;
  }
  * {
    cursor: pointer;
  }
`;
const BookTitle = styled.span`
  font-size: 12px;
`;
const OtherBooks = styled(FavBooks)``;
