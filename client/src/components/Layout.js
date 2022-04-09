import React, { useEffect, useState } from "react"
import Navbar from "./Navbar";
import {useLocation} from "react-router-dom"
import styled from "styled-components";

const Layout = (props) => {
  const navigate = useLocation()
  const [isLogin , setIsLogin] = useState(false)
  console.log(navigate)
  useEffect(
    () => {
      if(navigate.pathname.includes('login') || navigate.pathname.includes('signup')) setIsLogin(true)
    }
  , [setIsLogin, navigate])

  return (
    <>
      {(!isLogin || !navigate.pathname.includes('login') || !navigate.pathname.includes('signup')) ? <Navbar /> : ""}
      <Container>{props.children}</Container>
    </>
  )
}
export default Layout;


const Container = styled.main`
/* min-height:100vh */
`