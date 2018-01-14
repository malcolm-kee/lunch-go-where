import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

import placeReducer from "./placeReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  place: placeReducer
});

export default rootReducer;
