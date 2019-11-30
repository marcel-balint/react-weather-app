import React from "react";

const Input = props => (
  <div>
    <form onSubmit={props.showWeather}>
      <input type="text" name="text" placeholde="Type a city.."></input>
      <button>Search</button>
    </form>
  </div>
);

export default Input;
