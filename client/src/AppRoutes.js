import {
    Routes,
    Route
  } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookPage from "./pages/BookPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";

const AppRoutes = () => {
  return (
  <Routes>
      <Route path="/" element={<Navbar />}>
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
        <Route path="user" element={<UserPage />}></Route>

        {/* Not Found */}
        <Route path="*" element={<p>NotFound</p>} />
      </Route>
  </Routes>
  )
};

export default AppRoutes;
