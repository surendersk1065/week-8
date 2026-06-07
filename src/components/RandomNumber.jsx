import React, { useState } from 'react'

const RandomNumber = () => {
    const[rnum,setRnum] = useState('No Number Generated Yet')
  return (
    <>
        <div className="random-container bg-white text-black rounded-2xl my-24pr p-8">
                <div className="content text-center">
                    <h1 className='text-6xl font-extrabold'>Random Number Generator</h1>
                    <h1 className='my-12 font-bold text-4xl'>{rnum}</h1>
                    <button className='bg-yellow-300 p-4 rounded-lg cursor-pointer' onClick={() => {
                        let random = Math.floor(Math.random() * 100 + 1)
                        setRnum(random)
                    }}>Generate Random Number</button>
                    <button onClick={() => {
                        setRnum('No Number Generated Yet')
                    }} className='bg-yellow-300 p-4 rounded-lg cursor-pointer ms-4'>Reset</button>
                </div>
            </div>
    </>
  )
}

export default RandomNumber