import React, { Component } from "react";
import { connect } from "react-redux";

import "./beerShow.css";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class BeerSelection extends Component {
  renderTableData() {
    const beerArray = Object.keys(this.props.beerList).map(
      i => this.props.beerList[i]
    );

    return beerArray.map((beer, index) => {
      const { name, description, first_brewed } = beer;
      return (
        <TableRow
          key={name}
          style={
            index % 2 ? { background: "#dc143c" } : { background: "white" }
          }
        >
          <TableCell component="th" scope="row">
            {name}
          </TableCell>
          <TableCell align="center">{description}</TableCell>
          <TableCell align="right">{first_brewed}</TableCell>
        </TableRow>
      );
    });
  }

  render() {
    return (
      <div>
        <Paper className="paper">
          <Table>
            <TableHead className="table-header">
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="right">First Brewed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.renderTableData()}</TableBody>
          </Table>
        </Paper>
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
