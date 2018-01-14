import React from "react";

import "./style.css";

import AddPlaceForm from "./../AddPlaceForm";
import AuthGroup from "./../AuthGroup";
import PlaceList from "./../PlaceList";

const LandingPage = () => (
  <div>
    <div id="LandingPageHeader">
      <div>&nbsp;</div>
      <AddPlaceForm />
      <AuthGroup />
    </div>
    <PlaceList />
  </div>
);

export default LandingPage;
