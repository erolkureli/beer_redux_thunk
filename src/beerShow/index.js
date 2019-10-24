import React, { Component } from "react";
import { connect } from "react-redux";

class BeerSelection extends Component {
  render() {
    const beerArray = Object.keys(this.props.beerList).map(
      i => this.props.beerList[i]
    );
    return (
      <ul>
        {beerArray.map(function(beer) {
          return (
            <li key={beer.name}>
              {beer.description} - {beer.first_brewed}
            </li>
          );
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    beerList: state.beerQueryReducer.beerList
  };
}

export default connect(mapStateToProps)(BeerSelection);
