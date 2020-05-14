import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [theData, setTheData] = useState("");
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=TjdfHwdKkwBeLImpu8LLOskzl0sUux357JqFuurW")
    .then(res => setTheData(res.data))
    .catch(err => console.log("error!!!", err));
  }, []);
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
