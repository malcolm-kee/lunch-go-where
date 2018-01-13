import React, { Component } from "react";
import { connect } from "react-redux";

import PlaceList from "./view";

class PlaceListContainer extends Component {
  render() {
    const { places } = this.props;
    return <PlaceList places={places} />;
  }
}

const mapStateToProps = state => {
  const placesObj = state.place;
  const places = Object.keys(placesObj).map(id => placesObj[id]);

  return {
    places
  };
};

export default connect(mapStateToProps)(PlaceListContainer);
