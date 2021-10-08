import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {baseUrl, apiKey } from './APIkeys'
import axios from 'axios'
import "./App.css"
import Header from './Components/Header'
import Apod from './Components/Apod'
import Details from './Components/Details'
import Container from './Components/Container'


// !!!!!! style components goes here !!!!!!!

//h1 
const BlackH1 = styled.h1`
  color: color: #FAF9F6;
  font-family: 'times new roman';
  style: 'bold';
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
    <div className='App'>
      <Header/>
      <div className='container-main'>
          <BlackH1> PICTURE OF THE DAY!</BlackH1>
            <Apod url={nasaData.url}></Apod>
            <Details title={nasaData.tile} explanation={nasaData.explanation} copyright={nasaData.copyright} date={nasaData.date}></Details>
      </div>
    </div>
  );
}

export default App;
