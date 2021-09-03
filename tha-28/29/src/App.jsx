import "bootstarp/dist/css/bootstarp.min.css";
import './App.css';
//import {useState, useEffect} from "react";
import Form from './Components/form';
import Weathercard from "./Components/WeatherCard";
function App() {
  // const [, setPlace] = useState("");
  // const [placeData, setPlaceData] = useState(null);
  // const updatePlaceData = () => {
  //   fetch(
  //     // eslint-disable-next-line no-template-curly-in-string
  //     'https://www.weatherapi.com/v1/current.json?key=b19840217b8043a8b2651052212408&q=${place}'
  //   )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setPlaceData(data)
  //   });
  // }
  // useEffect(() => {
    
  // })
  return (
    <div className="App">
    <Form />
    <Weathercard />
    </div> 
  );
}

export default App;