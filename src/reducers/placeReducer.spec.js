import "jest";

import placeReducer from "./placeReducer";
import { addPlace, removePlace } from "../actions/place";

describe("placeReducer", () => {
  it("add place to state correctly", () => {
    const oldState = {
      a: {
        id: "a",
        name: "Klang BKT",
        googleMapUrl: "https://goo.gl/maps/GVg5u94jZmx"
      }
    };
    const finalState = {
      a: {
        id: "a",
        name: "Klang BKT",
        googleMapUrl: "https://goo.gl/maps/GVg5u94jZmx"
      },
      b: {
        id: "b",
        name: "KS Seafood",
        googleMapUrl: "https://goo.gl/maps/fnrb5NQ9mDJ2"
      }
    };
    const place = {
      id: "b",
      name: "KS Seafood",
      googleMapUrl: "https://goo.gl/maps/fnrb5NQ9mDJ2"
    };

    expect(placeReducer(oldState, addPlace(place))).toEqual(finalState);
  });

  it("remove place from state correctly", () => {
    const oldState = {
      a: {
        id: "a",
        name: "Klang BKT",
        googleMapUrl: "https://goo.gl/maps/GVg5u94jZmx"
      },
      b: {
        id: "b",
        name: "KS Seafood",
        googleMapUrl: "https://goo.gl/maps/fnrb5NQ9mDJ2"
      }
    };
    const finalState = {
      a: {
        id: "a",
        name: "Klang BKT",
        googleMapUrl: "https://goo.gl/maps/GVg5u94jZmx"
      }
    };
    const place = {
      id: "b",
      name: "KS Seafood",
      googleMapUrl: "https://goo.gl/maps/fnrb5NQ9mDJ2"
    };

    expect(placeReducer(oldState, removePlace(place))).toEqual(finalState);
  });
});
