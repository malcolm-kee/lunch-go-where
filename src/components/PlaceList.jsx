import React from "react";

const PlaceList = ({ places }) => (
  <section id="placelistSection">
    <ul id="placelist">
      {places.map(place => (
        <li key={place.id}>
          <section className="place-item">
            <header>{place.name}</header>
            <div className="details">
              {place.googleMapUrl && (
                <a href={place.googleMapUrl} target="_blank">
                  View Details
                </a>
              )}
            </div>
          </section>
        </li>
      ))}
    </ul>
  </section>
);

export default PlaceList;
