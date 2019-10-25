import React, { Component } from "react";

import { connect } from "react-redux";

import { beerQuery } from "../actions/index.js";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

class BeerQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: ""
    };
  }

  handleOnClick = () => {
    if (this.state.foodName.trim() === "") {
      alert("Please enter a food name !");
      return false;
    }

    this.props.onBeerQuery(this.state.foodName);
    this.setState({ foodName: "" });
  };

  handleChange = event => {
    this.setState({
      foodName: event.target.value
    });
  };

  render() {
    const { foodName } = this.state;

    return (
      <div className="beerSelection">
        <input
          type="text"
          placeholder="Food name"
          value={foodName}
          onChange={this.handleChange}
        />

        <button onClick={this.handleOnClick}>Send</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBeerQuery: food => {
      const queryFood = { inputFood: food };
      dispatch(beerQuery(queryFood));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BeerQuery);
