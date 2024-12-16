import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import "./Expenses.css";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [token, setToken] = useState(localStorage.getItem("token"))

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        // const token = localStorage.getItem("token");

        const response = await fetch(
          "http://localhost:5000/api/auth/getExpenses",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          let data = await response.json();
          setExpenses(data.expenses);
          
          let totalAmount = 0;

          data.expenses.forEach(expense =>{
            totalAmount += parseFloat(expense.amount);
          });
          setTotal(totalAmount)
        } else {
          console.error("Failed to fetch expenses");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchExpenses();
  }, []);


  const deleteExpenses = async (id) =>{
  try {
    const response = await fetch(`http://localhost:5000/api/auth/getExpenses/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.json();
    console.log(data);

    if(response.ok){
      alert("Deleted!")
      
     setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense._id !== id)
    );

    setTotal((prevTotal) =>
      prevTotal - parseFloat(expenses.find((expense) => expense._id === id).amount)
    );
    }
    
  } catch (error) {
    console.error(error);
    
  }
    
  }

  return (
    <>
      <Navbar />
      <div className="Main-Expenses-Container">
        <div className="Expenses-Head">
          <h1>Your Expenses</h1>
          <h1 className="Expenses-Head-Total">total: ${total} </h1>
        </div>

        <div className="Expenses-Body">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense._id}>
                  <td>{expense.title}</td>
                  <td>{expense.description}</td>
                  <td>${expense.amount}</td>
                  <td>{expense.category}</td>
                  <td>{new Date(expense.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button onClick={() => { deleteExpenses(expense._id)}}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Expenses;

