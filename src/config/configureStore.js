import { compose, createStore } from "redux";
import { reactReduxFirebase } from "react-redux-firebase";

import reducer from "../reducers";
import firebase from "./firebase";

const configureStore = () => {
  const rrfConfig = {
    userProfile: "users"
  };

  const createStoreWithFirebase = compose(reactReduxFirebase(firebase, rrfConfig))(createStore);

  const store = createStoreWithFirebase(
    reducer,
    /* eslint-disable */
    typeof window === "object" && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
    /* eslint-enable */
  );

  return store;
};

export default configureStore;
