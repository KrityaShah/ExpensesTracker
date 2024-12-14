import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../component/Navbar";
import wave from "../assets/wave.svg";
import "./Dashboard.css";


const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
    alert("Expense Created Successfully!");
    reset();
    setIsModalOpen(false); 
  };

  return (
    <>
      <Navbar />

      <div className="Main-Dashboard-Container">
        <h1>Welcome to ITracker</h1>
        <h4>Track Your Expenses Anywhere, Anytime</h4>
        <div className="dashboard-btn">
          <button onClick={() => setIsModalOpen(true)}>Track</button>
        </div>
      </div>

      
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Create Expense</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  {...register("title", { required: true })}
                  placeholder="Enter title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  {...register("description", { required: true })}
                  placeholder="Enter description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  id="amount"
                  {...register("amount", { required: true })}
                  placeholder="Enter amount"
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select id="category" {...register("category", { required: true })}>
                  <option value="">Select Category</option>
                  <option value="Food">Food</option>
                  <option value="Travel">Travel</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Bills">Bills</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-actions">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
