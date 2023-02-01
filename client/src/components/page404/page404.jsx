import React from "react";
import "./page404.css";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
const Page404 = () => {
  return (
    <>
      <div className="page404">
        <Link to="/home">
          <button className="buttonBack"> ← GO HOME</button>
        </Link>
        <div style={{ alignContent: "center" }}>
          <h1 style={{ color: "#d9b07e", textAlign: "center" }}>
            <BiError size="2em" />
            <br />
            Page 404 Not Found
            <br />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Page404;
