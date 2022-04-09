import { NavLink } from "react-router-dom";
//styles
import styled from "styled-components";

const Logo = () => {
  return (
    <Container>
      <NavLink to="/">
        <Text>Bibliophile</Text> Land
      </NavLink>
    </Container>
  );
};

export default Logo;

const Container = styled.h1`
  cursor: pointer;
  font-size: 28px;
  color: #d9d9d9;
  font-weight: 600;
  flex-grow: 2;
`;

const Text = styled.span`
  color: #cbcbcb;
  font-weight: 400;
`;
