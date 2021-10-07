import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import {baseUrl, apiKey, keyConnector} from './APIkeys'
import axios from 'axios';
import "./App.css";
import Header from './Header'
import APOD from './APOD';
import Details from './Details'

// !!!!!! style components goes here !!!!!!!

//h1 
const BlackH1 = styled.h1`
  color: color: #FAF9F6;
  font-family: 'times new roman';
  style: 'bold';
`;

//

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
        <div className='container-main'>
            <BlackH1> Picture of the day!</BlackH1>
            <img className="APOD_image" alt='APOD image' src={`${nasaData.url}`} />
      </div>
    </div>
  );
}

export default App;
