import React from "react";

const WeatherInfo = ({ weatherData }) => {
  return (
    <div className="weatherDetails">
      <h1>{weatherData.name}</h1>
      {weatherData.weather ? (
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
          <span className="weatherCondition">
            {weatherData.weather[0].description}
          </span>
        </div>
      ) : (
        <div>
          <h1>No Country / State Found</h1>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
