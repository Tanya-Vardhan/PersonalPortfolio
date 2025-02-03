import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex flex-wrap md:items-center px-10 pt-5 text-white justify-between'>
      <span className='text-xl font-bond tracking-wide'>Portfolio</span>
      <ul className='mx-24 py-2 mt-4 font-semibold bg-black px-2 rounded-xl bg-opacity-30 text-center md:bg-transparent md:flex md:mx-0 gap-6 '>
        <a href='#About'>
        <li className='text-md'>About</li>
        </a>
        <a href='#Experience'>
        <li className='text-md'>Experience</li>
        </a>
        <a href='#Projects'>
        <li className='text-md'>Projects</li>
        </a>
        <a href="#Footer">
        <li className='text-md'>Contacts</li>
        </a>
      </ul>
    </nav>
  )
}

export default Navbar