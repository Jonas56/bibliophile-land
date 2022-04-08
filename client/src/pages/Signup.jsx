/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const userData = { email, password };
  //   dispatch(login(userData));
  // };

  return (
    <Wrapper>
      <div className="BGImage">
        <Logo />
      </div>
      <LoginContainer>
        <Title>Create you own Land!</Title>
        <Box>
          <InputGroup>
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={onChange}
            />
          </InputGroup>
          <InputGroup>
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </InputGroup>
          <InputGroup>
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </InputGroup>
          <Submit>Signin</Submit>
        </Box>
        <NewAccount>Already a member? Sign in!</NewAccount>
      </LoginContainer>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -1.2rem -3rem;
  height: 100%;
  @media screen and (max-width: 768px) {
    margin: -1.2rem -1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  // Background Login Image Section
  .BGImage {
    top: 0;
    height: 100vh;
    width: 48%;
    background-image: url("./assets/BGlogin.jpg");
    background-size: cover;
  }

  // Background Logo
  .BGLogo {
    z-index: 1;
    font-size: 10em;
    color: #fff;
    opacity: 10%;
    position: absolute;
    bottom: 0;
    right: 10px;
    max-width: 1000px;
    text-align: end;
  }

  .BGLogoSpan {
    font-weight: 600;
  }

  // Responsive
  @media only screen and (max-width: 1400px) {
    .BGImage {
      display: none;
    }

    .BGLogo {
      display: none;
    }
  }

  @media only screen and (max-height: 900px) {
    .BGLogo {
      display: none;
    }
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin: auto;
  min-height: 90vh;
  gap: 2rem;
  width: 380px;
`;
const Title = styled.h2`
  line-height: 1;
  text-align: center;
  color: #dedede;
  font-size: 36px;
  font-weight: 500;
`;
const Box = styled.div`
  padding: 1.2rem 2.5rem;
  background-color: #1c272c;
  border-radius: 10px;
  height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
  label {
    color: #ebebeb;
    font-size: 15px;
  }
  input {
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: #0d1117;
    padding: 0 5%;
    color: #ebebeb;
    font-size: 15px;
  }
`;
const Submit = styled.button`
  width: 100%;
  height: 40px;
  background-color: #529a47;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
const NewAccount = styled.div`
  text-align: center;
  background-color: #1c272c;
  border-radius: 10px;
  padding: 20px;
  color: #ebebeb;
`;
