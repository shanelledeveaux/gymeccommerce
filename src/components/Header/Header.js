import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import axios from "axios";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  loginHandle = () => {
    window.location.href = "http://localhost:3001/login";
  };

  render() {
    return (
      <div className="header">
        <div className="title">
          <Link to="/">ULU</Link>
        </div>
        <div className="links">
          <Link to="/store">STORE</Link>
          <Link to="/schedule">SCHEDULE</Link>
          <Link to="/calculator">CALCULATOR</Link>
        </div>
        <button onClick={this.loginHandle} className="loginbtn">
          MEMBER SIGN IN
        </button>
      </div>
    );
  }
}

export default Header;
