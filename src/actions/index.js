import {
  BEER_QUERY_SUCCESS,
  BEER_QUERY_FAILURE,
  BEER_QUERY_STARTED
} from "./types";

import axios from "axios";

export function beerQuery({ inputFood }) {
  return dispatch => {
    dispatch(beerQueryStarted());

    return axios
      .get(`https://api.punkapi.com/v2/beers?food=${inputFood}`, {})
      .then(res => {
        dispatch(beerQuerySuccess(res.data));
      })
      .catch(err => {
        dispatch(beerQueryFailure(err.message));
      });
  };
}

export const beerQuerySuccess = beerList => ({
  type: BEER_QUERY_SUCCESS,
  payload: {
    ...beerList
  }
});

export const beerQueryStarted = () => ({
  type: BEER_QUERY_STARTED
});

export const beerQueryFailure = error => ({
  type: BEER_QUERY_FAILURE,
  payload: {
    error
  }
});
