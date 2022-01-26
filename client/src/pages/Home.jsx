import styled from "styled-components";
import ProfileSection from "../components/home/Profile";
import RightContent from "../components/home/RightContent";

const Home = () => {
  return (
    <Container>
      <Left>
        <ProfileSection />
      </Left>
      <Right>
        <RightContent />
      </Right>
    </Container>
  );
};

export default Home;

const Container = styled.main`
  width: 100%;
  margin-top: 1.7rem;
  margin-bottom: 1.7rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 0px;
  overflow: hidden;

  @media screen and (max-width: 928px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    gap: 2rem;
  }
  /* @media screen and (max-width: 1330px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
  } */
`;

const Left = styled.section`
  grid-area: 1 / 1 / 6 / 2;
  height: 100%;
  background-color: #141a1f;
  border-radius: 10px;
  padding: 1.2rem;
  flex: 1;
  @media screen and (max-width: 928px) {
    max-width: 100%;
  }
  /* @media screen and (max-width: 1330px) {
    grid-area: 1 / 1 / 6 / 2;
  } */
`;
const Right = styled.section`
  grid-area: 1 / 2 / 6 / 6;
  height: 100%;
  background-color: #141a1f;
  border-radius: 10px;
  padding: 1.2rem;
  @media screen and (max-width: 928px) {
    max-width: 100%;
  }
  /* @media screen and (max-width: 1330px) {
    grid-area: 1 / 2/ 6 / 5;
  } */
`;
