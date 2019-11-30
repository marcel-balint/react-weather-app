import React from "react";
import classes from "./Input.css";

const Input = props => (
  <div className={classes.InputBox}>
    <form onSubmit={props.showWeather}>
      <input
        className={classes.Input}
        type="text"
        name="text"
        placeholder="Type a city.."
      ></input>
      <button className={classes.Search}>Search</button>
    </form>
  </div>
);

export default Input;
