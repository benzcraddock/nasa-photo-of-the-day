import React, { useState, useEffect } from "react";
// import aaxios lib from node_modules
import axios from "axios"

import "./App.css";

import ComponentOne from "./ComponentOne";

function App() {
  const [nasaData, setNasaData] = useState('');

  // Make an effect that runs after first DOM render that consists of a call to API using axios
  // on success, array is set of of ___ objects from API into state
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=YU9FlyfIfgXA6fstyHQdVAbzLvMpjYdZqJpNheV1`)
    .then(res => {
      setNasaData(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])

  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <ComponentOne nasaAPI={nasaData} />
    </div>
  );
}

export default App;
