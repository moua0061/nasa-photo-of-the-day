import React, { useState } from "react";
import axios from 'axios';
import "./App.css";
import {baseUrl, apiKey, keyConnector} from './APIkeys'


function App() {

  const [nasaData, setNasaData] = useState([]);
  const [nasaInfo, setNasaInfo] = useState([]);

  axios.get(`${baseUrl}${keyConnector}${apiKey}`)
  .then(resp => {
    console.log(resp);
  })
  .catch (err => {
    console.log('your shit ain\'t working!!');
  })




  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
