import React from "react";
//styles
import styled from "styled-components";

const Logo = () => {
  return (
    <Container>
      <span>Bibliophile</span> Land
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

  span {
    color: #cbcbcb;
    font-weight: 400;
  }
`;
