import React, { Component } from "react";
import BeerQuery from "./beerQuery";
import BeerShow from "./beerShow";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BeerQuery></BeerQuery>
        <BeerShow></BeerShow>
      </div>
    );
  }
}

export default App;
