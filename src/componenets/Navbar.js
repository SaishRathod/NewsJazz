import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LatestNews from "./LatestNews";
import AstrologyNews from "./AstrologyNews";
import Home from "./Home";

export default function Navbar() {
  return (
    <div>
      <Router>
        <div className="navbar">
          <ul>
            <li>
              <button type="button" class="btn btn-outline-secondary">
                Music
              </button>
            </li>
          </ul>

          <a href="/" className="logo">
            <h1>
              <Link to="/"> News Jazz </Link>
            </h1>
          </a>

          <ul>
            <li>
              <button
                type="button"
                class="btn btn-primary"
                style={{ width: "90px", height: "45px", marginLeft: "20px" }}
              >
                Sign In
              </button>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="explore-strip">
          <div className="explore-options">
            <ul>
              <li>
                <Link to="/latestnews">Latest News</Link>
              </li>
              <li>
                <Link to="/astrology">Astrology</Link>
              </li>
              <li>Cricket</li>
              <li>Politics</li>
              <li>Space</li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<Home title="" />}></Route>
            <Route
              path="/latestnews"
              element={<LatestNews title="Latest News" />}
            ></Route>
            <Route
              path="/astrology"
              element={<AstrologyNews title="Astrology News" />}
            ></Route>
          </Routes>

          <ul>
            <li>
              Search
              {/* <input className="search-box" type="text" placeholder="Search..." /> */}
            </li>
          </ul>
        </div>
      </Router>
    </div>
  );
}
