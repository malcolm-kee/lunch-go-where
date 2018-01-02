import React from "react";

const AddPlaceForm = ({ name, onSubmit, handleChange }) => (
  <section id="addPlaceSection">
    <div id="addPlaceForm">
      <form onSubmit={onSubmit}>
        <label htmlFor="addPlaceForm--placeName">Place Name</label>
        <input
          type="text"
          name="name"
          id="addPlaceForm--placeName"
          placeholder="e.g. KFC, McD, etc."
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Add Place</button>
      </form>
    </div>
  </section>
);

export default AddPlaceForm;
