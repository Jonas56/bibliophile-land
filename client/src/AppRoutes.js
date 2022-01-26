import {
    Routes,
    Route
  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Book from "./pages/Book";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
  <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="books" element={<Book />}>
          <Route path=":id" element={<Book />} />
          {/* <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */}
        </Route>
        
        {/* <Route path="*" element={<p>NotFound</p>} /> */}
      </Route>
  </Routes>
  )
};

export default AppRoutes;
