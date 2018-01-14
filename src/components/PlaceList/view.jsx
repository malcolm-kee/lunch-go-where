import "./style.css";
import React from "react";

const PlaceList = ({ places }) => (
  <section id="placelistSection">
    <ul id="placelist">
      {places.map(place => (
        <li key={place.id} className="card">
          <section className="place-item card-block">
            <header className="card-title">{place.name}</header>
            {place.googleMapUrl && (
              <div className="card-block">
                <a href={place.googleMapUrl} target="_blank" className="card-link">
                  View Details
                </a>
              </div>
            )}
          </section>
        </li>
      ))}
    </ul>
  </section>
);

export default PlaceList;
