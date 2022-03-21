import React from "react";
import styled from "styled-components";

const AddButton = ({ text, color, bgColor, handleClick }) => {
  return (
    <Container color={color} bgColor={bgColor} onClick={() => handleClick()}>
      {text}
    </Container>
  );
};

export default AddButton;

const Container = styled.button`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#c8edc2")};
  color: ${(props) => (props.color ? props.color : "#29461b")};
  padding: 0.5rem 1.1rem;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  border-radius: 7px;
  border: none;
  cursor: pointer;
`;
