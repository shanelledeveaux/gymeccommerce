import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

var Header = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/schedule">Schedule</Link>
      </div>
    </div>
  );
};

export default Header;
