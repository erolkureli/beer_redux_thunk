import {
  BEER_QUERY_SUCCESS,
  BEER_QUERY_FAILURE,
  BEER_QUERY_STARTED
} from "../actions/types";

const initialState = {
  loading: false,
  beerList: [],
  error: null
};

export default function beerQueryReducer(state = initialState, action) {
  switch (action.type) {
    case BEER_QUERY_STARTED:
      return {
        ...state,
        loading: true
      };
    case BEER_QUERY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        beerList: action.payload
      };
    case BEER_QUERY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
