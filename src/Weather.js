import React from "react";
import axios from "axios";

export default function Weather(props) {
  function showWeather(response) {
    alert(
      `The temperature in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "5eac19cf21f53d5d30820a9a9bafd9f0";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);

  return <h2>Hello also from weather</h2>;
}
