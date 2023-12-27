import React from 'react'

export default function Navbar() {
  return (
    <nav >
      <h1 className='logo ml-5 text-white'>Ashish </h1>
      <ul className='links '>
        <li className="navlinks text-white">Home</li>
        <li className="navlinks text-white">Details</li>
        <li className="navlinks text-white">Projects</li>
        <li className="navlinks text-white">Contact</li>
        <Link href={"./ashishgarg.pdf"}>
            <button className='linkbutton text-white'>Resume</button>
        </Link>
      </ul>
    </nav>
  )
}
