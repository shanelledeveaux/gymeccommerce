import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import route from "./routes";
import { connect } from "react-redux";
import { getUser } from "./ducks/reducer";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    console.log("APP.JS PROPS", this.props);
    return (
      <div className="App">
        <Header />
        {route}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(App);
