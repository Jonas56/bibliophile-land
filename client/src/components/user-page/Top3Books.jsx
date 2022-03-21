import styled from "styled-components";

const Top3Books = () => {
  return (
    <Container>
      <Title>Top 3 Books</Title>
      <Books>
        <BookCard>
          <img
            src="http://digitalausten.org/sites/default/files/media/image/2017-10/Evensen%20Creative%20Edition%20Front.jpg"
            alt="Pride and Prejudice"
            className="top3-book-card_image"
          />
          <span className="top3-book-card_title">Pride and Prejudice</span>
        </BookCard>
        <BookCard>
          <img
            src="http://digitalausten.org/sites/default/files/media/image/2017-10/Evensen%20Creative%20Edition%20Front.jpg"
            alt="Pride and Prejudice"
            className="top3-book-card_image"
          />
          <span className="top3-book-card_title">Pride and Prejudice</span>
        </BookCard>
        <BookCard>
          <img
            src="http://digitalausten.org/sites/default/files/media/image/2017-10/Evensen%20Creative%20Edition%20Front.jpg"
            alt="Pride and Prejudice"
            className="top3-book-card_image"
          />
          <span className="top3-book-card_title">Pride and Prejudice</span>
        </BookCard>
      </Books>
    </Container>
  );
};
export default Top3Books;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const Books = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4%;
`;

const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  flex: 1;
  max-width: 28%;
  // title
  .top3-book-card_title {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
  }

  //image
  .top3-book-card_image {
    height: 176px;
    border-radius: 5px;
  }
`;
