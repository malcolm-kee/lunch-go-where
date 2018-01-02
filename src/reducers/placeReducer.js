import { ADD_PLACE, REMOVE_PLACE } from "../constants";

const DEFAULT_STATE = {
  a: {
    id: "a",
    name: "Klang BKT",
    googleMapUrl: "https://goo.gl/maps/GVg5u94jZmx"
  },
  b: {
    id: "b",
    name: "KS Seafood",
    googleMapUrl: "https://goo.gl/maps/fnrb5NQ9mDJ2"
  },
  c: {
    id: "c",
    name: "Meng Kee Char Siew",
    googleMapUrl: "https://goo.gl/maps/PMzA72Q4ZaR2"
  },
  d: {
    id: "d",
    name: "Sin Leong Huat",
    googleMapUrl: "https://goo.gl/maps/ksWYxmLGuqA2"
  },
  e: {
    id: "e",
    name: "Jojo Pan Mee",
    googleMapUrl: "https://goo.gl/maps/8z1cg48Frb82"
  },
  f: {
    id: "f",
    name: "AEON Shah Alam",
    googleMapUrl: "https://goo.gl/maps/uPU443irgSp"
  },
  g: {
    id: "g",
    name: "Level 3 Mamak"
  }
};

const addPlace = (state, action) => {
  const place = action.payload;

  return {
    ...state,
    [place.id]: place
  };
};

const removePlace = (state, action) => {
  const place = action.payload;
  const { [place.id]: value, ...newState } = state;

  return newState;
};

const placeReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return addPlace(state, action);

    case REMOVE_PLACE:
      return removePlace(state, action);

    default:
      return state;
  }
};

export default placeReducer;
