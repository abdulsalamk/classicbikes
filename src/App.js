import React, { Component } from "react";
import "./App.css";
import Products from "./components/products";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <Products />
      </div>
    );
  }
}

export default App;
