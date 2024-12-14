import React from 'react'
import Navbar from "../component/Navbar";
import wave from "../assets/wave.svg";
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <>
    <Navbar/>

    <div className='Main-Dashboard-Container'>
      <h1>Welcome to ITracker</h1>
      <h4>Track Your Expenses Anywhere, Anytime</h4>
      <div className="dashboard-btn">
      <button>Track</button>
      </div>
    </div>
    </>
  )
}

export default Dashboard
