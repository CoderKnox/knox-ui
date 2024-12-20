import React from 'react'
import Link from 'next/link'
import menu from '@/data/menu.json';

function page() {
  return (
    <div className='p-4'>
      <h1 className='font-bold text-3xl tracking-wider'>All KnoxUI components</h1>
      <div className='flex flex-wrap gap-2 mt-8'>
        {menu.map((component) => (
          <Link href={component.link} className='bg-base-200 py-10 text-center rounded-xl shadow duration-200 border hover:shadow-lg text-xl w-1/5 tracking-wider font-bold' key={component.name}>
            <p>{component.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default page