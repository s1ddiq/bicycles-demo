import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='sticky top-0 text-black flex w-full justify-between h-18 bg-white px-24 items-center'>
        <p className='text-3xl'>B!CYCLES</p>
        <div className='flex gap-8 text-xl'>
            <Link href={`/`}>Catalog</Link>
            <Link href={`/`}>About</Link>
            <Link href={`/`}>Contact</Link>
        </div>
    </header>
  )
}

export default Navbar
