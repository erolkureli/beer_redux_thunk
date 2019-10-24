export default (state = { beerList: [] }, action) => {
  switch (action.type) {
    case "BEERLIST":
      return {
        beerList: action.beers
      };
    default:
      return state;
  }
};
