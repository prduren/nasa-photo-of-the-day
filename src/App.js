import useAxios from 'axios-hooks';
import React from "react";
import "./App.css";
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [{ data, loading, error }] = useAxios(
    'https://api.nasa.gov/planetary/apod?api_key=TjdfHwdKkwBeLImpu8LLOskzl0sUux357JqFuurW'
  ); 
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>{JSON.stringify(error, null, 2)}</p>
  

  return (
    <div className="App">
      <Header />
      <div>
        <img src={data.url} alt="space" />
        <PhotoInfo explanation={data.explanation}/>
       </div>
      <Footer />
    </div>
  );
}

function PhotoInfo({explanation}) {
  return (
      <p>{explanation}</p>
  );
}


export default App;
