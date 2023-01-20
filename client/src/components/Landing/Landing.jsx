import React from "react";
import "../Landing/landing.css";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="landing">
      <div className="title">
        <h1 style={{ marginBottom: "2em" }}>Hi, welcome to HENRY COUNTRIES </h1>
        <Link to="/home">
          <button className="initial">
            <span>Start experience 🚀</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
