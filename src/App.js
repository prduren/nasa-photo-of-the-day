import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import PhotoCard from './components/photocard/PhotoCard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [theData, setTheData] = useState("");
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=TjdfHwdKkwBeLImpu8LLOskzl0sUux357JqFuurW")
    .then(res => setTheData(res.data))
    .catch(err => console.log("error!!!", err));
  }, []);
  return (
    <div className="App">
      <Header />
      <PhotoCard />
      <Footer />
    </div>
  );
}

export default App;
