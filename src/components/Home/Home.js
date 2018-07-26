import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="homepg">
        <div className="container">
          <div className="home_title">Ulu</div>
          <div className="home_description">
            is a gym for anyone who spends most of their lives putting others
            first. We do it as mothers, friends, wives, and business leaders.
            But here, you can focus on yourself and join a genuine and vital
            community, committed to inspiring and empowering each other in all
            aspects of your health and wellness pursuits.
          </div>
        </div>
        <Link to="/pricing">
          <button className="loginbtn">SEE PRICING</button>
        </Link>
      </div>
    );
  }
}

export default Home;
