import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setstate] = useState(0)
  const [state1, setstate1] = useState(0)
  const [state2, setstate2] = useState(0)
  const [state3, setstate3] = useState(0)
    return ( 
    <div className = "App" >
      <p className = "para">There are 4 counter components that each manage their own state.</p>
      <button onClick = { ()=> {
        const newState = state + 1;
        setstate(newState);
      }}>{state}</button>
      <button onClick = { ()=> {
        const newState1 = state1 + 1;
        setstate1(newState1);
      }}>{state1}</button>
      <button onClick = { ()=> {
        const newState2 = state2 + 1;
        setstate2(newState2);
      }}>{state2}</button>
      <button onClick = { ()=> {
        const newState3 = state3 + 1;
        setstate3(newState3);
      }}>{state3}</button>
    </div>
    );
}

export default App;