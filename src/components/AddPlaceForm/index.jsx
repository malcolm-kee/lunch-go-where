import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addPlace } from "../../actions/place";

import AddPlaceForm from "./view";

class AddPlaceFormContainer extends React.Component {
  static propTypes = {
    dispatchAddPlace: PropTypes.func.isRequired
  };

  state = {
    id: Date.now(),
    name: ""
  };

  handleFieldChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatchAddPlace(this.state);
    this.setState({
      id: Date.now(),
      name: ""
    });
  };

  render() {
    return (
      <AddPlaceForm
        onSubmit={this.handleSubmit}
        onChange={this.handleFieldChange}
        {...this.state}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPlace(place) {
    dispatch(addPlace(place));
  }
});

export default connect(null, mapDispatchToProps)(AddPlaceFormContainer);
