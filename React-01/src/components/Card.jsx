import React from 'react'

const Card = (props) => {
  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
      
      <div className="w-20 h-20 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center text-3xl font-bold">
        {props.username.charAt(0)}
      </div>

      <h1 className="text-2xl font-bold mt-4">
        {props.username} {props.surname}
      </h1>

      <h2 className="text-gray-600 mt-2">
        📍 {props.city}
      </h2>

      <h3 className="text-gray-500">
        🎂 {props.age} years old
      </h3>

      <button className="mt-5 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
        Add Friend
      </button>
    </div>
  )
}

export default Card