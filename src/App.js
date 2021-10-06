import React, { useState } from "react";
import axios from 'axios';
import "./App.css";
import {baseUrl, apiKey, keyConnector} from './APIkeys'


function App() {

  const [nasaData, setNasaData] = useState([]);
  const [nasaInfo, setNasaInfo] = useState([]);


  axios.get('https://api.nasa.gov/planetary/apod?api_key=MfEb6c9Y3m7bFaSeflHCOH21fXiWNhXgD94LRO4K')
  .then(resp => {
    console.log(resp.data);
    return setNasaData(resp.data);
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
      <div className='container'>
        <div className='APOD'>
          <h1> Picture of the day!</h1>
          <img className="APOD_image" alt='APOD image' src={`${nasaData.url}`} />
        </div>
      </div>
    </div>
  );
}

export default App;
