import React, { Component } from "react";
import "./App.css";

import Input from "./components/Input/Input";
import Weather from "./components/Weather/Weather";
import MoreInfo from "./components/MoreInfo/MoreInfo";

const Api_Key = "79b63a8e14c9e0cb2d5cfaf0d76b208a";

class App extends Component {
  state = {
    city: null,
    country: null,
    mainTemperature: null,
    temp_max: null,
    temp_min: null,
    description: "",
    pressure: null,
    humidity: null,
    wind: null,
    cloudiness: null,
    error: false
  };

  getWeatherData = async e => {
    e.preventDefault();
    try {
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
        description: parsedData.weather[0].description,
        pressure: parsedData.main.pressure,
        humidity: parsedData.main.humidity,
        wind: parsedData.wind.speed,
        cloudiness: parsedData.clouds.all,
        error: false
      });
    } catch (error) {
      this.setState({ error: true });
    }
  };

  render() {
    let showError = null;
    let showWeather = null;

    if (this.state.loaded) {
      showWeather = (
        <Weather
          city={this.state.city}
          country={this.state.country}
          mainTemperature={this.state.mainTemperature}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
        />
      );
    } else {
      showWeather = null;
    }

    if (this.state.error) {
      showError = <p>Please type another city.</p>;
    }

    return (
      <div className="App">
        {showError}
        <Input showWeather={this.getWeatherData} />
        {showWeather}
        <MoreInfo
          pressure={this.state.pressure}
          humidity={this.state.humidity}
          wind={this.state.wind}
          clouds={this.state.cloudiness}
        />
      </div>
    );
  }
}

export default App;
