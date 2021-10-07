import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {baseUrl, apiKey } from './APIkeys'
import axios from 'axios';
import "./App.css";
import Header from './Header'
import Apod from './Apod';
import Details from './Details'

// !!!!!! style components goes here !!!!!!!

//h1 
const BlackH1 = styled.h1`
  color: color: #FAF9F6;
  font-family: 'times new roman';
  style: 'bold';
`;

//img div
const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
`;

//content div
const ContentDiv = styled.div`

`;

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
            <p> {nasaData.date} </p>
            <img className="APOD_image" alt='APOD image' src={`${nasaData.url}`} width='75%' />
            <p>{nasaData.title}</p>
            <p>{nasaData.explanation} </p>
      </div>
    </div>
  );
}

export default App;
