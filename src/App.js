import React from "react";

import configureStore from "./config/configureStore";

import Root from "./components/Root";

const store = configureStore();

const App = () => <Root store={store} />;

export default App;
