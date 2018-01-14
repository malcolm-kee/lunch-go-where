import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PlaceList from "./view";

const PlaceListContainer = ({ places }) => <PlaceList places={places} />;

PlaceListContainer.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    })
  )
};

PlaceListContainer.defaultProps = {
  places: []
};

const mapStateToProps = state => {
  const placesObj = state.place;
  const places = Object.keys(placesObj).map(id => placesObj[id]);

  return {
    places
  };
};

export default connect(mapStateToProps)(PlaceListContainer);
