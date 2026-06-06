import React from 'react'
import { MoveRight } from 'lucide-react';

const RightCardContent = (props) => {
    return (
        <div><div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
            <h2 className='bg-white text- xl font-bold rounded-full h-8 w-8 flex justify-center items-center'>{props.id}</h2>
            <div>
                <p className='text-lg leading-normal text-white mb-10'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button className={`${props.color} text-white font-medium px-4 py-2 rounded-full`}>
                        {props.tag}
                    </button>

                    <button className= {`${props.color} text-white font-medium px-4 py-2 rounded-full`}>
                        <MoveRight />
                    </button>
                </div>
            </div>
        </div></div>
    )
}

export default RightCardContent