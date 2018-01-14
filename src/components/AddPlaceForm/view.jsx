import "./style.css";

import React from "react";
import PropTypes from "prop-types";

const AddPlaceForm = ({ onSubmit, onChange, name }) => (
  <div id="AddPlaceFormContainer">
    <form id="AddPlaceForm" onSubmit={onSubmit} className="form-inline">
      <input
        type="text"
        name="name"
        onChange={onChange}
        value={name}
        placeholder="Add your fav lunch place"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  </div>
);

AddPlaceForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default AddPlaceForm;
