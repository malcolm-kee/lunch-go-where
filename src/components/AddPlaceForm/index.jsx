import React from "react";
import { connect } from "react-redux";

import { addPlace } from "../../actions/place";

import AddPlaceForm from "./view";

class AddPlaceFormContainer extends React.Component {
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
