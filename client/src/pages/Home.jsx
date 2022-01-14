import styled from "styled-components";
import ProfileSection from "../components/home/Profile";

const Home = () => {
  return (
    <Container>
      <Left>
        <ProfileSection />
      </Left>
      <Right>Marcos Work Here!</Right>
    </Container>
  );
};

export default Home;

const Container = styled.main`
  height: 830px;
  width: 100%;
  display: flex;
  margin-top: 1.7rem;
  margin-bottom: 1.7rem;
  gap: 1rem;
`;

const Left = styled.section`
  width: 400px;
  height: 100%;
  background-color: #141a1f;
  border-radius: 10px;
  padding: 1.5rem;
  flex: 1;
`;
const Right = styled.section`
  height: 100%;
  background-color: #141a1f;
  border-radius: 10px;
  padding: 1.5rem;
  flex: 2.5;
`;
