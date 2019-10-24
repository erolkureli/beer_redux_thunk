import React, { Component } from "react";
import { connect } from "react-redux";

class BeerSelection extends Component {
  renderTableData() {
    const beerArray = Object.keys(this.props.beerList).map(
      i => this.props.beerList[i]
    );

    return beerArray.map((beer, index) => {
      const { name, description, first_brewed } = beer;
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{description}</td>
          <td>{first_brewed}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Beers</h1>
        <table id="beers">
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    beerList: state.beerQueryReducer.beerList
  };
}

export default connect(mapStateToProps)(BeerSelection);
