// import React from 'react'
// import Forms from './Forms.jsx'
// import UseState1 from './UseState.jsx'
// import Card from './components/Card.jsx'
import axios from 'axios'
import './App.css'

// const users = [
//   {
//     username: "Shreya",
//     surname: "Gupta",
//     city: "Delhi",
//     age: 20
//   },
//   {
//     username: "Varsha",
//     surname: "Sharma",
//     city: "Mumbai",
//     age: 22
//   },
//   {
//     username: "Aman",
//     surname: "Verma",
//     city: "Bangalore",
//     age: 21
//   },
//   {
//     username: "Priya",
//     surname: "Singh",
//     city: "Hyderabad",
//     age: 19
//   },
//   {
//     username: "Rahul",
//     surname: "Kumar",
//     city: "Pune",
//     age: 23
//   }
// ];

// const App = () => {
//   let a = randomNumber()

//    function randomNumber() {
//     return Math.floor(Math.random() * 100)
//   }

//   let name = "shreya"
//   const user = 'Shreya'

//   function changeUser(){
//     name = "varsha" // by this way we are directly interacting with the variable and changing its value, but react does not know that we have changed the value of the variable, so it does not re-render the component, to make it re-render we have to use state, by this way we are indirectly interacting with the variable and changing its value, and react knows that we have changed the value of the variable, so it re-renders the component
//   }

//   return (
//     <div>
//       {/* <h1 className="text-3xl font-bold underline">Hello, Number is {a} </h1>
//       <h1>Username is {name} </h1>
//       <button onClick={changeUser}> Change User</button> */}
//       {/* <Forms /> */}
//       <div className='p-10 flex flex-wrap justify-center gap-6 p-8 bg-gray-100 min-h-screen'>
//         {users.map((e) => {
//           return <Card username = {e.username} surname = {e.surname} age = {e.age} city = {e.city} />
//         })
//       }
//       </div>
//     </div>
    
//   )
// }

// export default App

import React, { useState } from 'react'
// import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await fetch(
      'https://picsum.photos/v2/list?page=2&limit=100'
    )
    const data = await response.json()
    setData(data)
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-slate-800">
          Photo Gallery
        </h1>
        <p className="text-slate-500 mt-2">
          Explore beautiful random images
        </p>

        <button
          onClick={getData}
          className="mt-6 px-8 py-3 bg-teal-500 text-white rounded-xl shadow-md hover:bg-teal-600 active:scale-95 transition"
        >
          Load Images
        </button>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((elem) => (
            <div
              key={elem.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <img
                src={elem.download_url}
                alt={elem.author}
                className="w-full h-64 object-cover"
              />

              <div className="p-4">
                <h2 className="font-semibold text-lg text-slate-800">
                  {elem.author}
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Image ID: {elem.id}
                </p>

                <a
                  href={elem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-teal-600 font-medium hover:underline"
                >
                  View Source →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App