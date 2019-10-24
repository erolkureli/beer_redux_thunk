import React, { Component } from "react";
import { connect } from "react-redux";

class BeerList extends Component {
  render() {
    return (
      <div>
        <ul className="beerTable">{this.props.beerList}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    beerList: state.beerReducer.beerList
  };
}

export default connect(mapStateToProps)(BeerList);
