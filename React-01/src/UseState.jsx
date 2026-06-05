import React, { useState } from 'react'
import './App.css'

const UseState1 = () => {
  // useState is a hook in react which allows us to add state to our functional components, it returns an array with two elements, the first element is the current state and the second element is a function which allows us to update the state, we can use array destructuring to get the current state and the function to update the state, we can also pass an initial value to the useState hook which will be the initial value of the state

  const [a, setA] = useState(10);

  function changeA() {
    setA(20) // by this way we are indirectly interacting with the variable and changing its value, and react knows that we have changed the value of the variable, so it re-renders the component

    let b = Math.floor(Math.random() * 100);
    setA(b);
  }

  const [user, setUser] = useState("shreya")

  function changeUser() {
    setUser("varsha") // by this way we are indirectly interacting with the variable and changing its value, and react knows that we have changed the value of the variable, so it re-renders the component

    let name = prompt("Enter your name");
    setUser(name);
  }

  return (
    <div>
      <div className="p-4 flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold underline">Value of a is : {a} </h1>
        <button onClick={changeA} className="bg-cyan-500 text-white py-2 px-4 rounded">
          Change a
        </button>
      </div>

      <div className="p-4 flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold underline">Name of user is: {user} </h1>
        <button onClick={changeUser} className="bg-cyan-500 text-white py-2 px-4 rounded">
          Change User
        </button>
      </div>

      <h1 className ="text-5xl font-bold underline text-center">
        Hello world!
      </h1>
    </div>
  )
}

export default UseState1;