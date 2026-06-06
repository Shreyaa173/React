import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [name, setName] = useState('')
  function submitHandler(e){
    console.log(e.target[0].value)
    e.preventDefault();
    setName('')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input 
        type="text" 
        placeholder='Enter your name'
        value = {name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        /> 
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App