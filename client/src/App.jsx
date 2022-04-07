import React from "react";
import AppRoutes from "./AppRoutes";
import "./index.css";
import Layout from "../src/components/Layout";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <AppRoutes />
      </Layout>
    </Provider>
  );
};

export default App;
