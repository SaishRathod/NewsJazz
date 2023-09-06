import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewsCards from "./NewsCards";

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
              <Link to="/" className="logo-text">
                News Jazz
              </Link>
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
                <Link to="/business">Business</Link>
              </li>
              <li>
                <Link to="/entertainment">Entertainment</Link>
              </li>
              <li>
                <Link to="/science">Science</Link>
              </li>
              <li>
                <Link to="/sports">Sports</Link>
              </li>
              <li>
                <Link to="/technology">Technology</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<NewsCards title="For you" />}></Route>
            <Route
              path="/business"
              element={<NewsCards title="Business News" />}
            ></Route>
            <Route
              path="/entertainment"
              element={<NewsCards title="Entertainment News" />}
            ></Route>
            <Route
              path="/science"
              element={<NewsCards title="Science News" />}
            ></Route>
            <Route
              path="/sports"
              element={<NewsCards title="Sports News" />}
            ></Route>
            <Route
              path="/technology"
              element={<NewsCards title="Technology News" />}
            ></Route>
          </Routes>

          <div className="search-section">
            <ul>
              <li>
                <input
                  className="search-box"
                  type="text"
                  placeholder="Search news..."
                />
              </li>
            </ul>
          </div>
        </div>
      </Router>
    </div>
  );
}
