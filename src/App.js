import React, { Component } from "react";
import "./App.css";

const Api_Key = "79b63a8e14c9e0cb2d5cfaf0d76b208a";

class App extends Component {
  getWeatherData = async () => {
    const getData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${Api_Key}`
    );
    const parsedData = await getData.json();
    console.log(parsedData);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.getWeatherData}>Show</button>
      </div>
    );
  }
}

export default App;
