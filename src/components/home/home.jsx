import React from 'react'

import TextChange from '../textchange'
import tanyaimg from '../../assets/tanyaimg.png'

export const Home = () => {
  return (
    <div className='text-white w-full flex justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
            <h1 className='text-3xl md:text-5xl font-bold leading-normal tracking-tighter'>
                <TextChange/></h1>
            <p className='text-sm md:text-2xl tracking-tight md:mt-2'>
            I am currently an undergraduate student pursuing a Bachelor of Technology in Computer Science and Engineering at NIT Rourkela!</p>
                <button className='mt-5 py-2 px-3 text-sm md:text-lg bg-[#465697] hover:opacity-85 hover:scale-105 font-semibold rounded-3xl'><a href='#Footer'>Contact me</a></button>
        </div>
        <div>
        <img className="min-h-40 min-w-40 max-h-60 max-w-60 h-auto w-auto" src={tanyaimg} alt="" />

        </div>
    </div> 
  )
}
