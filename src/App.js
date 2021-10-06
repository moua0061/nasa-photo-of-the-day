import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import {baseUrl, apiKey, keyConnector} from './APIkeys'


function App() {

  const [nasaData, setNasaData] = useState([]);
  const [nasaInfo, setNasaInfo] = useState([]);

useEffect(() => {
  
  axios.get(`${baseUrl}?api_key=${apiKey}`)
  .then(resp => {
    console.log(resp.data);
    return setNasaData(resp.data);
  })
  .catch (err => {
    console.log('your shit ain\'t working!!');
  
  })
  
},[])




  return (
    <div className="App">
      <div className='Header'>
        <div className='Container-main'>
          <div className='APOD-img-container'>
            <h1> Picture of the day!</h1>
            <img className="APOD_image" alt='APOD image' src={`${nasaData.url}`} />
          <div className='information detail'>
            <p>
              {`${nasaData.title}`}
            </p>
            <p>
            {`${nasaData.date}`}
            </p>
            <p>
            {`${nasaData.explanation}`}
            </p>
            <p>
            {`By: ${nasaData.copyright}`}
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
