import styled from "styled-components";

const Profile = () => {
  return (
    <Container>
      <ProfileInfo>
        <Profile>
          <Photo></Photo>
          <Info>
            <Name></Name>
            <Username></Username>
            <Followers></Followers>
          </Info>
        </Profile>
        <Readbooks>
          <Title></Title>
          <Number></Number>
        </Readbooks>
        <Readbooks>
          <Title></Title>
          <Number></Number>
        </Readbooks>
        <Readbooks>
          <Title></Title>
          <Number></Number>
        </Readbooks>
      </ProfileInfo>
      <FavBooks>
        <h3></h3>
        <Books>
          <Book></Book>
          <Book></Book>
          <Book></Book>
        </Books>
      </FavBooks>
      <OtherBooks>
        <h3></h3>
        <Books>
          <Book></Book>
          <Book></Book>
          <Book></Book>
        </Books>
      </OtherBooks>
    </Container>
  );
};

export default Profile;

const Container = styled.div``;
const ProfileInfo = styled.div``;
const Photo = styled.div``;
const Info = styled.div``;
const Name = styled.div``;
const Username = styled.div``;
const Followers = styled.div``;
const Readbooks = styled.div``;
const Title = styled.div``;
const Number = styled.div``;
const FavBooks = styled.div``;
const Books = styled.div``;
const Book = styled.div``;
const OtherBooks = styled.div``;
