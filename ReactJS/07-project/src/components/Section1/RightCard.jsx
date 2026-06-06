import React from 'react'
import RightCardContent from './RightCardContent';

const RightCard = (users) => {
    return (
        <div className='h-full w-60 shrink-0 bg-red-200 rounded-4xl overflow-hidden relative "'>
            <img src=
            {users.img} className='h-full w-full object-cover' alt="" />
            <RightCardContent intro ={users.intro} tag = {users.tag} id = {users.id} color = {users.color}/>
        </div>
    )
}

export default RightCard