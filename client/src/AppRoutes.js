import {
    Routes,
    Route
  } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookPage from "./pages/BookPage";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";

const AppRoutes = () => {
  return (
  <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="books" element={<BookPage />}>
          <Route path=":id" element={<BookPage />} />
          {/* <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */}
        </Route>
        <Route path="user" element={<UserPage />}></Route>
        {/* <Route path="*" element={<p>NotFound</p>} /> */}
      </Route>
  </Routes>
  )
};

export default AppRoutes;
