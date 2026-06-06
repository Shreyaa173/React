import React from 'react'
import './App.css'
import { useState } from 'react';

const App = () => {
  let [a, setA] = useState(20)

  function changeA() {
    setA(30);
  }

  return (
    <div>
      <h1>Value of a: {a}</h1>
      <button className='p-2 bg-amber-200 rounded' onClick={changeA}>Change</button>
    </div>
  )
}

export default App