import React from "react";

const Weather = props => {
  return (
    <div>
      <h3>
        Weather in {props.city}, {props.country}:
      </h3>
      <div>
        <p> {props.description}</p>
        <p>
          <strong>{props.mainTemperature}&deg;C</strong>
        </p>
        <p>
          Max: <strong>{props.temp_max}&deg;C</strong>
        </p>
        <p>
          Min: <strong>{props.temp_min}&deg;C</strong>
        </p>
        <span onClick={props.showInfo}>More Info</span>
      </div>
    </div>
  );
};

export default Weather;
