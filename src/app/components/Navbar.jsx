import React from 'react'

export default function Navbar() {
  return (
    <nav >
      <h1 className='logo ml-5'>Ashish </h1>
      <ul className='links'>
        <li className="navlinks">Home</li>
        <li className="navlinks">Details</li>
        <li className="navlinks">Projects</li>
        <li className="navlinks">Contact</li>
        <button className='linkbutton'>Resume</button>
      </ul>
    </nav>
  )
}
