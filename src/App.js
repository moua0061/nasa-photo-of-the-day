import React from "react";
import axios from 'axios';
import "./App.css";

axios.get('https://api.nasa.gov/planetary/apod');

function App() {
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
