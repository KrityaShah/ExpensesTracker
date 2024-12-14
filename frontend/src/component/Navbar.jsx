import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='Main-NavContainer'>
        <div className="head-nav">
            <h1>Expenses Tracker</h1>
        </div>
      <ul>
       <Link to="/" className="nav-link"><li>Login</li></Link> 
      <Link to="/signup" className="nav-link"><li>Sign up</li></Link> 
      </ul>
    </div>
  )
}

export default Navbar
