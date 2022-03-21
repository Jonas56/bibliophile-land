import React from "react";
import styled from "styled-components";
import ProfileSection from "../components/user-page/ProfileSide";
import { MdOutlineMenuBook } from "react-icons/md";
import { Outlet } from "react-router";
import BooksCollection from "../components/user-page/BooksCollection";

const UserPage = () => {
  return (
    <>
      {" "}
      <Container>
        <Left>
          <Cover />
          <ProfileSection />
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
        </Left>
        <Right>
          <BooksCollection title={"Read books"} />
        </Right>
      </Container>
      <Outlet />
    </>
  );
};

export default UserPage;

const Container = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 1rem;
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
    justify-content: center;
    flex-direction: column;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    gap: 2rem;
    height: auto;
  }
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`;

const Left = styled.section`
  grid-area: 1 / 1 / 6 / 2;
  height: 100%;
  max-width: 458px;
  min-width: 400px;
  background-color: #141a1f;
  border-radius: 10px;
  padding: 1.2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  /* @media screen and (max-width: 928px) {
    max-width: 100%;
  } */
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
  @media screen and (max-width: 1024px) {
    flex: 1;
    align-self: center;
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

  border-radius: 10px;
`;

/* Currently Reading */
const CurrentlyReading = styled.div`
  width: 100%;
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
    padding: 0.6rem 1.2rem;
    margin-top: 0.5rem;
    width: 100%;
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
      flex-grow: 1;

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
        min-width: 100%;
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

/*** RIght Side */
const Right = styled.section`
  grid-area: 1 / 2 / 6 / 5;
  height: 100%;
  /* background-color: #141a1f; */
  border-radius: 20px;
  padding: 1.2rem;
  overflow-x: auto;
  background: linear-gradient(
    119.25deg,
    #171f29 3.31%,
    rgba(0, 0, 0, 0) 109.45%
  );

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
