import { useState } from "react";
import styled from "styled-components";

const PageLayout1 = () => {
  // dropdown 1
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  // dorpdown 2
  const [isOpen2, setIsOpen2] = useState(false);
  const toggling2 = () => setIsOpen2(!isOpen2);
  return (
    <Container>
      <LeftSide>
        <DropDownContainer>
          <div className="dropdown-categories">
            {" "}
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
          </div>
          <div className="dropdown-library">
            {" "}
            <DropDownHeader onClick={toggling2}>Your Library</DropDownHeader>
            {isOpen2 && (
              <DropDownListContainer>
                <DropDownList>
                  <ListItem>Read Books</ListItem>
                  <ListItem>Top3</ListItem>
                  <ListItem>Read Later</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </div>
        </DropDownContainer>
        <CurrentlyReading>
          <div className="currently-reading-image">
            <img src="./assets/book.jpg" alt="Book" />
          </div>
          <div className="currently-reading-info">
            <div className="currently-reading-info_title">
              <span>The Greatest Book</span>
            </div>
            <div className="currently-reading-info_nbPages">
              <span>page 69/169</span>
            </div>
          </div>
        </CurrentlyReading>
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
  justify-content: space-between;
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

/* DropDown Section */

const DropDownContainer = styled("div")`
  width: 12.5em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  cursor: pointer;
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

/* Currently Reading */
const CurrentlyReading = styled.div`
  display: flex;
  background: #0d1117;
  border-radius: 10px;
  padding: 0.4em 0.8em 0.4em 1em;
  gap: 1rem;
  .currently-reading-image {
    img {
      height: 103px;
      width: 67px;
    }
  }
  .currently-reading-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &_title {
      span {
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
    &_nbPages {
      span {
        font-family: Montserrat;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }
`;
