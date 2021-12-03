import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react"

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';

// Functional Component or Hook
function App() {
  // Logic part of our component
  // useState accepts two values
  // State variable with initial value passed inside useState()
  // setState or set[state var name] - means of changing our state variable
  const [ count, setCount ] = useState(0)
  const [ sessionToken, setSessionToken ] = useState(undefined)
  console.log(sessionToken)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"))
    }
  })

  const updateLocalStorage = newToken => {
    localStorage.setItem("token", newToken)
    setSessionToken(newToken)
  }

  const clearLocalStorage = () =>{
    localStorage.clear()
    setSessionToken(undefined)
  }

  const viewConductor = () => {
    return sessionToken !== undefined ?
    <Pies /> : <Auth updateLocalStorage={updateLocalStorage} />
  }

  
  return (
    // Part that gets rendered on screen
    // <>
    // <button onClick={ () => setCount(count + 1) }>+</button>
    // <span>{count}</span>
    // <button onClick={ () => setCount(count - 1) }>-</button>
    // </>
    <div className="App">
      <Navbar clearSession={clearLocalStorage}/>
      {viewConductor()}
    </div>
  );
}

export default App;