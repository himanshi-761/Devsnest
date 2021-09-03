import './App.css';
import {useState} from "react";
function App() {
  
const [above, setAbove] = useState("above Arrow");
const [below, setBelow] = useState("Below arrow");
const [left, setLeft] = useState("Left Arrow");
const [right, setRight] = useState("Right Arrow");



return(
<div className= "App">
  <button className ="btn " onClick = {() => {setAbove("North" )}} > {above}</button>
  <button className = "btn" onClick = {() => setLeft("West")}> {left} </button>
  <button className = "btn" onClick = {() => setBelow("South")}> {below} </button>
  <button className = "btn" onClick = {() => setRight("East")}> {right} </button>
  <button onClick = {() => {setAbove("above Arrow"); setBelow("Below arrow"); setLeft("Left Arrow"); setRight("Right Arrow");}}>  RESET  </button>
  </div>
 
);
}
export default App;