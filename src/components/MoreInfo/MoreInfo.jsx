import React from "react";

const MoreInfo = props => {
  return (
    <div>
      <p>
        Wind Speed: <strong>{props.wind} m/s </strong>
      </p>
      <p>
        Humidity:<strong> {props.humidity}%</strong>{" "}
      </p>
      <p>
        Cloudiness : <strong>{props.clouds} % </strong>
      </p>
      <p>
        Atmospheric pressure: <strong>{props.pressure}</strong>
      </p>
    </div>
  );
};

export default MoreInfo;
