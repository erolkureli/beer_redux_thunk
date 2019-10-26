import React, { Component } from "react";

import { connect } from "react-redux";

import { beerQuery } from "../actions/index.js";

import Button from "@material-ui/core/Button";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import theme from "../theme";

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
      <div>
        <input
          type="text"
          placeholder="Food name"
          value={foodName}
          onChange={this.handleChange}
        />
        <MuiThemeProvider>
          <Button
            theme={theme}
            onClick={this.handleOnClick}
            style={{
              backgroundColor: theme.palette.primary.main
            }}
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </MuiThemeProvider>
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
