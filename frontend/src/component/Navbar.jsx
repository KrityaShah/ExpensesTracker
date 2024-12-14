import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="Main-NavContainer">
      <div className="head-nav">
        <h1>ITracker</h1>
      </div>
      {isLoggedIn ? (
        <>
          <ul>
            <Link to="/dashboard" className="nav-link">
              <li>home</li>
            </Link>
            <Link to="/profile" className="nav-link">
              <li>profile</li>
            </Link>
            <Link to="" className="nav-link">
              <li>Expenses</li>
            </Link>
            <Link to="" className="nav-link">
              <li>Logout</li>
            </Link>
          </ul>
        </>
      ) : (
        <>
          <ul>
            <Link to="/" className="nav-link">
              <li>Login</li>
            </Link>
            <Link to="/signup" className="nav-link">
              <li>Sign up</li>
            </Link>
          </ul>
        </>
      )}
    </div>
  );
};

export default Navbar;
