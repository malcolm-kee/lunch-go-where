import React, { Component } from "react";

import AddPlaceFormContainer from "./AddPlaceFormContainer";
import PlaceListContainer from "./PlaceListContainer";

class HomePage extends Component {
  render() {
    return (
      <main>
        <AddPlaceFormContainer />
        <PlaceListContainer />
      </main>
    );
  }
}

export default HomePage;
