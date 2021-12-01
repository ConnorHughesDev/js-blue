import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth'

// Functional Componetnt or Hook
function App() {
  // Logic part of our component
  // useState accepts two values
  // State variable with initial value passed inside useState()
  // setState or set[state var name] - means of changing our state variable
  const [ count, setCount ] = useState(0)
  const [ sessionToken, setSessionToken ] = useState("undefined")

  
  return (
    // Part that gets rendered on screen
    // <>
    // <button onClick={ () => setCount(count + 1)}>+</button>
    // <span>{count}</span>
    // <button onClick={ () => setCount(count - 1)}>-</button>
    // </>
    <div className="App">
      <Navbar />
      <Auth />
    </div>
  );
}

export default App;
