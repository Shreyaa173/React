import React from 'react'
import { MoveUpRight } from 'lucide-react';

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col w-1/3 justify-between '>
        <div>
            <h3 className='text-5xl font-bold mb-7 '>Prospective <br />  <span>Customer</span> <br />Segmentation</h3>
            <p className='text-md text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, numquam veritatis? Repellendus quis dolores unde qui Lorem ipsum dolor sit amet.</p>
        </div>
        <div><MoveUpRight size={60} /></div>
    </div>
  )
}

export default LeftContent