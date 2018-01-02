import React from "react";

const PlaceList = ({ places }) => (
  <div>
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
  </div>
);

export default PlaceList;
