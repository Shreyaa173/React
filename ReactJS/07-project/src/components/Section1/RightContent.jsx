import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full w-2/3 p-6 flex wrap overflow-x-auto gap-4 rounded-6xl hide-scrollbar'>
        {props.users.map((user,idx) => {
            return <RightCard img = {user.img} intro ={user.intro} tag = {user.tag} id = {user.id} color = {user.color} />
        })}
    </div>
  )
} 

export default RightContent