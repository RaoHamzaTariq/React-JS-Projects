import React from 'react'

const Navigation = () => {
  return (
    <div>
      <nav className='container'>
        <div className="logo">
          <img src="/Images/Nike-Logo.png" alt="brand-logo" width= '100'/>
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  )
}

export default Navigation
