import React from 'react'
import Logo from './shared/Logo'

function Navbar() {
  return (
    <div className='flex justify-evenly items-center bg-orange-400'>
      <div>
        <Logo/>
      </div>
      <div>
        <button>Login</button>
        <button>SignUp</button>
      </div>
    </div>
  )
}

export default Navbar
