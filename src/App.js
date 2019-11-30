import React, { Component } from "react";
import "./App.css";

import Input from "./components/Input/Input";

const Api_Key = "79b63a8e14c9e0cb2d5cfaf0d76b208a";

class App extends Component {
  getWeatherData = async e => {
    e.preventDefault();
    const getData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${Api_Key}`
    );
    const parsedData = await getData.json();
    console.log(parsedData);
  };

  render() {
    return (
      <div className="App">
        <Input showWeather={this.getWeatherData} />
      </div>
    );
  }
}

export default App;
