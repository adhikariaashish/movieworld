import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex justify-center gap-20 p-4 text-2xl bg-amber-100 dark:bg-gray-600 font-semibold lg:text-lg'>
      <span className='hover:text-amber-500 text-xl'><NavbarItem title="Trending" param="fetchTrending" /></span>
      <span className='hover:text-amber-500 text-xl'><NavbarItem title="Top Rated" param="fetchTopRated" /></span>
      
    </div>
  )
}
