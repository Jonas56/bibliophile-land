import { useState, useEffect } from "react";
import styled from "styled-components";
import ProfileSection from "../components/home/Profile";
import RightContent from "../components/home/RightContent";
import axios from "axios";
import { Outlet } from "react-router";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBooks = async () => {
    await axios
      .get("v1/api/books")
      .then((response) => {
        console.log(response);
        setBooks(response.data.rows);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };
  const getAuthors = async () => {
    axios
      .get("/v1/api/authors")
      .then((response) => {
        console.log(response);
        setAuthors(response.data.rows);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    await getBooks();
    await getAuthors();
  }, []);
  return (
    <>
      {" "}
      <Container>
        <Left>
          <Cover />
          <ProfileSection books={books} loading={loading} />
        </Left>
        <Right>
          <RightContent books={books} loading={loading} authors={authors} />
        </Right>
      </Container>
      <Outlet />
    </>
  );
};

export default Home;

const Container = styled.main`
  width: 100%;
  margin-top: 1.7rem;
  margin-bottom: 1.7rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 0px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    gap: 2rem;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`;

const Left = styled.section`
  grid-area: 1 / 1 / 6 / 2;
  height: 100%;
  background-color: #141a1f;
  border-radius: 10px;
  padding: 1.2rem;
  position: relative;
  overflow-x: auto;

  /* @media screen and (max-width: 928px) {
    max-width: 100%;
  } */
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
  @media screen and (max-width: 1024px) {
    flex: 1;
  }
  @media screen and (max-width: 1280px) {
    grid-area: 1 / 1 / 6 / 2;
  }
`;
const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-image: url("/assets/profilecover.png");
  background-size: cover;
  z-index: 1;
`;

const Right = styled.section`
  grid-area: 1 / 2 / 6 / 5;
  height: 100%;
  background-color: #141a1f;
  border-radius: 10px;
  padding: 1.2rem;
  overflow-x: auto;

  /* @media screen and (max-width: 928px) {
    max-width: 100%;
  } */
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
  @media screen and (max-width: 1024px) {
    flex: 1;
  }
  @media screen and (max-width: 1280px) {
    grid-area: 1 / 2 / 6 / 4;
  }
`;
