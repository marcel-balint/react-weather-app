## Weather app

A live demo can be found [here](https://marcel-balint.github.io/react-weather-app/).

Weather application build with React which uses [OpenWeatherMap](https://openweathermap.org/api) API to display weather information for a particular city as follows: the **main temperature** of the day, the **maximum temperature** expected, the **minimum temperature** expected, **wind speed** (in m/s), **humidity** in percentages , **cloudiness** in percentages and **amospheric pressure**. All temperatures are displayed in _[Celsius](https://en.wikipedia.org/wiki/Celsius)_.

## Features

- A title at the top of the page: the aim of this title is to give the user a general idea of the application usage.
- An input field with an indicative placeholder: allwos users to search any city by clicking the _search_ button or by pressing _enter_;
- Animation of data: the data will scale from `(0.2)` to `(1)` when it appears on screen;
- A _more info_ button: when clicked, displays a more detaliated information about the weather conditions (wind speed, humidity, cloudiness and athmospheric pressure).

## Technologies used

- CCS
- React (JavaScript Framework)

## Deployment

This project was deployed on the GitHub pages with the following steps:

- installed gh-pages package:

`npm install --save gh-pages`

- modified the `package.json` file by adding the following:

  - `https://[my-user-name].github.io/[my-repo-name]/`
  - in the `scripts` object added:
    - `“predeploy”: "npm run build"`
    - `"deploy": "gh-pages -d build"`

- deployed the application by typing:

`npm run deploy`

## Getting started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Things you need to install the software and how to install them:

- npm : `npm install npm@latest -g`

### Installing

1. Clone the repo:

`git clone https://github.com/marcel-balint/react-weather-app.git`

2.Run npm install inside project root directory:

`npm install`

3.Start the server:

`npm start`
