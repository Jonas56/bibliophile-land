import { useState } from "react";
import styled from "styled-components";

const PageLayout1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <Container>
      <LeftSide>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>Categories</DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                <ListItem>Classics</ListItem>
                <ListItem>Comic</ListItem>
                <ListItem>Fantasy</ListItem>
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>Your Library</DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                <ListItem>Read Books</ListItem>
                <ListItem>Top3</ListItem>
                <ListItem>Read Later</ListItem>
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </LeftSide>
      <RightSide></RightSide>
    </Container>
  );
};

export default PageLayout1;

const Container = styled.div`
  // grid
  display: grid;
  grid-template-columns: 334px repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  height: 81vh;
  width: 100%;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and (max-width: 1280px) {
  }
`;

const LeftSide = styled.div`
  grid-area: 1 / 1 / 6 / 2;
  background-color: #141a1f;
  border-radius: 20px;
  height: 100%;
  padding: 1.7rem 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  p:nth-child(3) {
    justify-self: flex-end;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const RightSide = styled.div`
  grid-area: 1 / 2 / 6 / 6;
  background-color: #141a1f;
  border-radius: 20px;
  @media screen and (max-width: 1024px) {
    grid-area: 1 / 1 / 6 / 2;
  }
`;

/***********/

const DropDownContainer = styled("div")`
  width: 12.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  color: white;
  border-radius: 10px;
  background: #0d1117;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

const DropDownListContainer = styled("div")`
  transform: all 0.7s ease;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  box-sizing: border-box;
  transform: all 0.7s ease;
  /* &:first-child {
    padding-top: 0.8em;
  } */
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  color: white;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;
