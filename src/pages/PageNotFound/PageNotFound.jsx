import React from "react";
import { Link } from "react-router-dom";
import "./PageNOtFound.css";

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <h1>404</h1>
      <div>
        <h2>Page not found</h2>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
