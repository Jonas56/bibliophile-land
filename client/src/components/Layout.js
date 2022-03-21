import React, { useEffect, useState } from "react"
import Navbar from "./Navbar";
import {useLocation} from "react-router-dom"

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
      {!isLogin ? <Navbar /> : ""}
      <main>{props.children}</main>
    </>
  )
}
export default Layout;