import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import route from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {route}
      </div>
    );
  }
}

export default App;
