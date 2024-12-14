import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='Main-NavContainer'>
        <div className="head-nav">
            <h1>Expenses Tracker</h1>
        </div>
      <ul>
        <li>Sign up</li>
        <li>Login</li>
      </ul>
    </div>
  )
}

export default Navbar
