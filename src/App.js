import React, { useState, useEffect } from "react";
import "./App.css";

import CountrySearch from "./CountrySearch";
import WeatherInfo from "./WeatherInfo";

const apiKey = "2255f5b5834362289b68c776ffeefaae";

const App = () => {
  const [country, setCountry] = useState("Malaysia");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`
      );
      let data = await response.json();
      setWeatherData(data);
      console.log(data);
    };
    fetchWeather();
  }, [country]);

  return (
    <div className="container">
      <WeatherInfo weatherData={weatherData} />
      <CountrySearch setCountry={setCountry} />
    </div>
  );
};

export default App;
