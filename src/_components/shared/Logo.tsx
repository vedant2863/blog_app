import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className=''>
        <Image src={"/logo/book.png"} alt='logo' width={60} height={60}/>
        <span className='text-red-300 font-bold'>Blogs</span>

    </div>
  )
}

export default Logo
