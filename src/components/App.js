
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div id = "main">
       <h2>Weather Report</h2>
    <p>Temperature:<span style={{color:temperatureColor}}>{weather.temperature}</span></p>
    <p>Conditions: {weather.conditions}</p>
    </div>
  )
}

export default App
