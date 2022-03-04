import React from "react";
import styled from "styled-components";

const AddButton = ({ text }) => {
  return <Container>{text}</Container>;
};

export default AddButton;

const Container = styled.button`
  background-color: #c8edc2;
  color: #29461b;
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
