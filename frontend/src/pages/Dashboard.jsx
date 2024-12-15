import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../component/Navbar";
import wave from "../assets/wave.svg";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/auth/createExpenses", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        let res_data = await response.json();
        alert("Expense Created Successfully!");
        navigate('/expenses');
        console.log(res_data);
        reset();
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
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
                  {...register("title", { 
                    required: "Title is required", 
                    validate: value => value.trim().length > 0 || "Title cannot be empty" 
                  })}
                  placeholder="Enter title"
                />
                {errors.title && <p className="error">{errors.title.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  {...register("description", { required: "Description is required" })}
                  placeholder="Enter description"
                />
                {errors.description && <p className="error">{errors.description.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  id="amount"
                  {...register("amount", { 
                    required: "Amount is required", 
                    validate: value => value > 0 || "Amount must be greater than zero" 
                  })}
                  placeholder="Enter amount"
                />
                {errors.amount && <p className="error">{errors.amount.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select 
                  id="category" 
                  {...register("category", { required: "Category is required" })}
                >
                  <option value="">Select Category</option>
                  <option value="Food">Food</option>
                  <option value="Travel">Travel</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Bills">Bills</option>
                </select>
                {errors.category && <p className="error">{errors.category.message}</p>}
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
