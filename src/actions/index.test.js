jest.unmock("./index.js");
jest.unmock("redux-mock-store");
jest.unmock("redux-thunk");

import mockAxios from "axios";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./index.js";

describe("beerQuery action creator", () => {
  it("dispatches BEER_QUERY_STARTED action and returns data on success", async () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);

    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [
          {
            name: "Avery Brown Dredge",
            description: "Imperial Pilsner",
            first_brewed: "02/2011"
          }
        ]
      })
    );

    const store = mockStore({
      beerList: {}
    });

    const queryFood = { inputFood: "Vietnamese squid salad" };

    return store.dispatch(actions.beerQuery(queryFood)).then(() => {
      const actions = store.getActions();

      expect(actions[0].type["type"]).toEqual("BEER_QUERY_STARTED");
      expect(actions[1].type["type"]).toEqual("BEER_QUERY_SUCCESS");
      expect(actions[1].payload["0"].name).toEqual("Avery Brown Dredge");
    });
  });
});
