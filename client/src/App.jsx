import React from "react";
// components
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
