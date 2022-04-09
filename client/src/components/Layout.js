import Navbar from "./Navbar";
import {useLocation} from "react-router-dom"
import styled from "styled-components";

const Layout = (props) => {
  const navigate = useLocation()
  console.log(navigate)


  return (
    <>
      {(!navigate.pathname.includes('login') && !navigate.pathname.includes('signup')) ? <Navbar /> : ""}
      <Container>{props.children}</Container>
    </>
  )
}
export default Layout;


const Container = styled.main`
/* min-height:100vh */
`