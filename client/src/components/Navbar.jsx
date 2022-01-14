import styled from "styled-components";
import Logo from "./Logo";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <Container>
      <Logo />
      <NavMenu>
        <Search>
          <input
            type="text"
            placeholder="Search .."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <BiSearchAlt2
            style={{
              cursor: "pointer",
              fontSize: "21px",
            }}
          />
        </Search>
        <Icons>
          <Icon>
            <BsThreeDots />
          </Icon>
          <Icon>
            <IoMdNotifications />
          </Icon>
          <Icon>
            <FaUserAlt />
          </Icon>
        </Icons>
      </NavMenu>
    </Container>
  );
};

export default Navbar;

const Container = styled.header`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
`;
const NavMenu = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
`;
const Search = styled.div`
  background-color: #141a1f;
  padding: 0.5rem 1.2rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    outline: none;
    border: none;
    background: none;
    padding-right: 2rem;
    color: aliceblue;
  }

  * {
    font-size: 16px;
  }
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Icon = styled.div`
  font-size: 21px;
  cursor: pointer;
`;
