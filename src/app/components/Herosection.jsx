import Link from 'next/link'
import React from 'react'

export default function Herosection() {
  return (
   <>
        <div className='setbackground flex items-center pl-5'>
            <div className='custompadding'>
                <h4 className='text-lg lg:text-xl text-white'>Hi There! 👋🏻</h4>
                <h2 className='text-4xl lg:text-6xl font-extrabold mt-4 mb-3 stylefont text-white'>I'M Ashish garg</h2>
                <h3 className='text-white text-lg mb-4 '>I am a React Developer</h3>
                <Link href={"./ashishgarg.pdf"}>
                <button  className='donwloadButton text-white'>Donwload Resume</button>
                </Link>
            </div>
        </div>
    </>
  )
}
