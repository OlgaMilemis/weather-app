import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5eac19cf21f53d5d30820a9a9bafd9f0";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function showCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city"
        autoFocus={true}
        onChange={showCity}
      />
      <button type="Submit"> Search </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h2>{city}</h2>

        <ul className="feedBack">
          <li>Temperature: {Math.round(weather.temperature)}°C </li>
          <li>Description: {weather.description}</li>
          <li> Humidity: {weather.humidity} %</li>
          <li>Wind: {Math.round(weather.wind)}km/h </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
