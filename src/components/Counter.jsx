import React, { useState } from 'react'
import RandomNumber from './RandomNumber'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='md:flex justify-around'>
            <div className="counter-container bg-white text-black rounded-2xl my-48 p-8">
                <div className="content text-center">
                    <h1 className='text-6xl font-extrabold'>Counter Application</h1>
                    <h1 className='my-16 text-5xl font-bold'>{count}</h1>
                    <button className='bg-yellow-300 text-black  font-bold p-4 rounded-lg me-4 cursor-pointer' onClick={() => {
                        setCount((prev) => prev + 1)
                    }}>Increment</button>
                    <button className='bg-yellow-300 text-black font-bold p-4 rounded-lg me-4 cursor-pointer' onClick={() => {
                        if (count > 0) {
                            setCount((prev) => count - 1)
                        }
                    }}>Decrement</button>
                    <button className='bg-yellow-300 text-black font-bold p-4 rounded-lg cursor-pointer' onClick={() => {
                        setCount(0)
                    }}>Reset</button>
                    <p className='my-8 text-red-500'>{count === 0 ? <p>Minimum limit reached</p> : ''}</p>
                </div>
            </div>
            <RandomNumber />    
        </div>
    )
}

export default Counter