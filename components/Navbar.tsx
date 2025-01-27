import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
    <div className="top-0 right-0 p-8 w-screen h-4 pt-4">
      <div className="font-mono flex flex-row items-start justify-end space-x-4">
        <Link href="/"><p>Home</p></Link>
        <a href="/projects/"><p>Projects</p></a>
        <a href="/writing/"><p>Writing</p></a>
        <a href="/videos/"><p>Videos</p></a>
        <a href="/contact/"><p>Contact</p></a>
      </div>
    </div>
    </div>
  )
}

export default Navbar