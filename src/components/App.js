
import React from "react";
import './../styles/App.css';

const App = () => {

  const weather = { Temperature: 25, conditions: "Sunny"};
  const temperatureColor = weather.Temperature > 20 ? 'red' : 'blue';
  return (
    <div id = "main">
       <h2>Weather Report</h2>
    <p>Temperature:<span style={{color:TemperatureColor}}>{weather.Temperature}</span></p>
    <p>Conditions: {weather.conditions}</p>
    </div>
  )
}

export default App
