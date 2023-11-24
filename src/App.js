import React from "react";
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Pages
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Person2Icon from '@mui/icons-material/Person2';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import DetailPage from "./pages/DetailPage";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
// Components
import LocationOnIcon from '@mui/icons-material/LocationOn';

import "./App.css";
import About from "./pages/AboutPage";
import Coordinate from "./pages/Coordinate";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/coordinate" element={<Coordinate />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </div>

      <footer>

        <div className="link-wrapper">
          <NavLink to="/" className="iconWrapper">
            <LocationOnIcon style={{ fontSize: '2rem' }} className="icon" />
          </NavLink>

          <NavLink to="/coordinate" className="iconWrapper">
            <MyLocationIcon style={{ fontSize: '2rem' }} className="icon" />
          </NavLink>

          <NavLink to="/about" className="iconWrapper">
            <QuestionMarkIcon style={{ fontSize: '2rem' }} className="icon" />
          </NavLink>

          <NavLink to="/profile" className="iconWrapper">
            <Person2Icon style={{ fontSize: '2rem' }} className="icon" />
          </NavLink>

        </div>

      </footer>
    </Router>
  );
}

export default App;
