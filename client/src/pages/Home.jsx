import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineMenuBook,
  MdOutlineCategory,
  MdOutlineLocalLibrary,
} from "react-icons/md";
import RightContent from "../components/home/RightHomeContent";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getAllBooks, selectAllBooks } from "../redux/slices/booksSlice";

const PageLayout1 = () => {
  const reduxBooks = useSelector(selectAllBooks);
  const { status, books } = reduxBooks;
  const dispatch = useDispatch();
  console.log(reduxBooks);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllBooks());
    }
  }, [dispatch, status]);

  // dropdown 1
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  // dorpdown 2
  const [isOpen2, setIsOpen2] = useState(false);
  const toggling2 = () => setIsOpen2(!isOpen2);

  // data
  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    axios
      .get("/v1/api/authors")
      .then((response) => {
        setAuthors(response.data.rows);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getAuthors();
  }, []);

  return (
    <Container>
      <LeftSide>
        <DropDownContainer>
          <div className="dropdown-categories">
            {" "}
            <DropDownHeader onClick={toggling}>
              <span>
                <MdOutlineCategory />
                Categories
              </span>
              {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </DropDownHeader>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  <ListItem>Classics</ListItem>
                  <ListItem>Comic</ListItem>
                  <ListItem>Fantasy</ListItem>
                  <ListItem>Classics</ListItem>
                  <ListItem>Comic</ListItem>
                  <ListItem>Fantasy</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </div>
          <div className="dropdown-library">
            {" "}
            <DropDownHeader onClick={toggling2}>
              <span>
                <MdOutlineLocalLibrary />
                Your Library
              </span>
              {isOpen2 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </DropDownHeader>
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
          <span>Currently Reading</span>
          <div className="currently-reading">
            {" "}
            <div className="currently-reading-image">
              <img src="./assets/book.jpg" alt="Book" />
            </div>
            <div className="currently-reading-info">
              <div className="currently-reading-info_title">
                <span>The Greatest Book</span>
              </div>
              <div className="currently-reading-info_nbPages">
                <span>page 69/169</span>
                <MdOutlineMenuBook className="currently-reading-info_nbPages_icon" />
              </div>
            </div>
          </div>
        </CurrentlyReading>
      </LeftSide>
      <RightSide>
        <RightContent
          books={books}
          loading={status === "loading"}
          authors={authors}
        />
      </RightSide>
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
  min-height: 81vh;
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
  height: 81vh;
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
  height: 100%;
  padding: 1.2rem;
  overflow: auto;
  background: linear-gradient(
    119.25deg,
    #171f29 3.31%,
    rgba(0, 0, 0, 0) 109.45%
  );
  @media screen and (max-width: 1024px) {
    grid-area: 1 / 1 / 6 / 2;
  }
`;

/* DropDown Section */

const DropDownContainer = styled("div")`
  width: 15.5em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 0.4em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  color: white;
  border-radius: 10px;
  background: #0d1117;
  display: flex;
  justify-content: space-between;
  align-items: center;

  * {
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.71rem;
    margin-right: 3rem;
  }

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
  margin-left: 2rem;
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
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-left: 0.8rem;
  }
  .currently-reading {
    display: flex;
    background: #0d1117;
    border-radius: 10px;
    padding: 0.4em 1em 0.4em 1em;
    margin-top: 0.5rem;
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-family: Montserrat;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: left;
        }
        &_icon {
          font-size: 1.7rem;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: left;
        }
      }
    }
  }
`;
