import {
    Routes,
    Route
  } from "react-router-dom";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppRoutes = () => {
  return (
    <>
  <Routes>
      <Route path="/">
        {/* home page */ }
        <Route index element={<Home />} />

        {/* login and signup */ }
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Login />} />

        {/* books */}
        <Route path="books" element={<BookPage />}>
          <Route path=":bookid" element={<BookPage />}>
            <Route path="readbooks" element={<BookPage />}/>
            <Route path="toberead" element={<BookPage />}/>
          </Route>
        </Route>

        {/* authors */}
        <Route path="authors" element={<BookPage />}>
          <Route path=":authorid" element={<BookPage />}>
          </Route>
        </Route>

        {/* user */}
        <Route path="user" element={<UserPage />}/>

        {/* Categories */}
        <Route path="category" >
          <Route path=":bookid" />
        </Route>

        {/* Search */}
        <Route path="search" />

        {/* Not Found */}
        <Route path="*" element={<p>NotFound</p>} />
        
      </Route>
  </Routes>
  <ToastContainer />
  </>
  )
};

export default AppRoutes;
