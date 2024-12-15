import React from 'react'
import Navbar from '../component/Navbar'
import "./Expenses.css"

const Expenses = () => {
  return (
    <>
    <Navbar/>
    <div className='Main-Expenses-Container'>

        <div className="Expenses-Head">
     <h1>Your Expenses</h1>
     <h1 className='Expenses-Head-Total'>total: 1600 </h1>
        </div>

        <div className="Expenses-Body">
            
        <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Amount</th>
        <th>Created Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Fruits</td>
        <td>Syau, Kera</td>
        <td>$800</td>
        <td>12/14/2024</td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
      <tr>
        <td>Snacks</td>
        <td>Chips, Cookies</td>
        <td>$500</td>
        <td>12/13/2024</td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
      <tr>
        <td>Transportation</td>
        <td>Bus fare</td>
        <td>$300</td>
        <td>12/12/2024</td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    </tbody>
  </table>

        </div>
    </div>
    </>
  )
}

export default Expenses
