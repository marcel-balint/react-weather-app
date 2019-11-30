import React, { Component } from "react";
import "./App.css";

import Input from "./components/Input/Input";
import Weather from "./components/Weather/Weather";

const Api_Key = "79b63a8e14c9e0cb2d5cfaf0d76b208a";

class App extends Component {
  state = {
    city: null,
    country: null,
    mainTemperature: null,
    temp_max: null,
    temp_min: null,
    description: ""
  };

  getWeatherData = async e => {
    e.preventDefault();

    const city = e.target.elements.text.value;
    const getData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`
    );
    const parsedData = await getData.json();
    this.setState({
      city: parsedData.name,
      country: parsedData.sys.country,
      mainTemperature: parsedData.main.temp,
      temp_max: parsedData.main.temp_max,
      temp_min: parsedData.main.temp_min,
      description: parsedData.weather[0].description
    });
  };

  render() {
    return (
      <div className="App">
        <Input showWeather={this.getWeatherData} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          mainTemperature={this.state.mainTemperature}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
