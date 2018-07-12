import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

var Header = () => {
  return (
    <div className="header">
      <div className="title">ULU</div>
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/store">STORE</Link>
        <Link to="/schedule">SCHEDULE</Link>
        <Link to="/calculator">CALCULATOR</Link>
      </div>
      <button className="loginbtn">MEMBER SIGN IN</button>
    </div>
  );
};

export default Header;
