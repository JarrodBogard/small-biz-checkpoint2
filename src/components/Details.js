import React from "react";
import Map from "./Map";

const Details = (props) => {
  return (
    <div className="details-container">
      {props.detailsList.map((el, index) => (
        <ul className="ul-details-display" key={index}>
          <li>{el.name}</li>
          <li>{el.address}</li>
          <li>{el.hours}</li>
          <li>{el.description}</li>
          <div className="details-map-container">
            <Map latitude={props.latitude} longitude={props.longitude} />
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Details;
