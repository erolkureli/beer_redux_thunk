import React, { Component } from "react";
import "./beerSelection.css";
import axios from "axios";
import { connect } from "react-redux";

class BeerSelection extends Component {
  constructor(props) {
    super(props);
    this.beerFetchData = this.beerFetchData.bind(this);
    this.state = {
      foodName: "",
      beerList: []
    };
  }

  handleChange = event => {
    this.setState({
      foodName: event.target.value
    });
  };

  beerFetchData = () => {
    return function(dispatch) {
      const { foodName } = this.state;
      const inputFoodName = foodName.replace(" ", "_");
      const url = `https://api.punkapi.com/v2/beers?food=${inputFoodName}`;

      return axios.get(url).then(res => {
        const beers = res.data;

        dispatch(this.props.showBeers(beers));
        //this.setState({ beerList: beers, foodName: "" });
        //this.props.getBeerList(beers);
      });
    };
  };

  handleOnClick = () => {
    // validate input
    this.props.getBeerList();
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

function mapDispatchToProps(dispatch) {
  return {
    getBeerList: () => dispatch(this.beerFetchData),
    showBeers: beers =>
      dispatch({
        type: "BEERLIST",
        beers
      })
  };
}

export default connect(
  null,
  mapDispatchToProps
)(BeerSelection);
