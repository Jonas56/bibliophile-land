import React from "react";
import AppRoutes from "./AppRoutes";
import "./index.css";
import Layout from "../src/components/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  );
};

export default App;
