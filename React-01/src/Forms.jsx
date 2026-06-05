import React, { useState } from 'react'
import './App.css'

const Forms = () => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted');
        setName('')

    }

    return (
        <div className='p-6'>
            <form action="">
                <input type="text" className='px-8 py-2 border-black' value = {name} onChange = {(e) => {
                    setName(e.target.value) 
                }}  placeholder='Enter your username' />
                <button type='submit' onClick={handleSubmit} className='mx-3 px-4 py-1 bg-red-100'>Submit</button>
            </form>
        </div>
    )
}

export default Forms