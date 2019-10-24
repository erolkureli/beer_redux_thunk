import {
  BEER_QUERY_SUCCESS,
  BEER_QUERY_FAILURE,
  BEER_QUERY_STARTED
} from "./types";

import axios from "axios";

export const beerQuery = ({ inputFood }) => {
  return dispatch => {
    dispatch(beerQueryStarted());

    axios
      .get(`https://api.punkapi.com/v2/beers?food=${inputFood}`, {})
      .then(res => {
        dispatch(beerQuerySuccess(res.data));
      })
      .catch(err => {
        dispatch(beerQueryFailure(err.message));
      });
  };
};

const beerQuerySuccess = beerList => ({
  type: BEER_QUERY_SUCCESS,
  payload: {
    ...beerList
  }
});

const beerQueryStarted = () => ({
  type: BEER_QUERY_STARTED
});

const beerQueryFailure = error => ({
  type: BEER_QUERY_FAILURE,
  payload: {
    error
  }
});
