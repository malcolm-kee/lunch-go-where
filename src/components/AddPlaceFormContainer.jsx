import React, { Component } from "react";
import uuid from "uuid/v4";
import { connect } from "react-redux";

import { addPlace } from "../actions/place";

import AddPlaceForm from "./AddPlaceForm";

class AddPlaceFormContainer extends Component {
  state = {
    id: uuid(),
    name: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { dispatchAddPlace } = this.props;
    const { id, name } = this.state;

    dispatchAddPlace({
      id,
      name
    });

    this.setState({
      id: uuid(),
      name: ""
    });
  };

  render() {
    return (
      <AddPlaceForm
        name={this.state.name}
        onSubmit={this.handleSubmit}
        handleChange={this.handleChange}
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
