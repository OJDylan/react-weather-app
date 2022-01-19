import React, { useState, useEffect } from "react";
import "./App.css";

// Import the components
import WeatherInfo from "./WeatherInfo";
import CountrySearch from "./CountrySearch";

const apiKey = {
  key: "2255f5b5834362289b68c776ffeefaae",
};

const App = () => {
  const [country, setCountry] = useState("Kuala Lumpur"); // set initial country state
  const [weatherData, setWeatherData] = useState({}); // set initial weatherData state

  useEffect(() => {
    const fetchWeather = async () => {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey.key}`
      );
      let data = await response.json();

      setWeatherData(data); // update weatherData state with fetched response
      console.log(data);
    };

    fetchWeather();
  }, [country]); // dependency on country; entire block would exec whenever country variable changes

  return (
    <div className="container">

      {/* check whether weatherData exists before rendering the component */}
      {weatherData.weather ? (
        <WeatherInfo weatherData={weatherData} />
      ) : (
        <h1>No Country / State / City Found</h1>
      )}

      <CountrySearch setCountry={setCountry} />

    </div>
  );
};

export default App;
