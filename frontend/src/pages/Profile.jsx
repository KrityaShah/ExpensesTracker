import React from 'react';
import { useAuth } from '../store/auth';
import Navbar from '../component/Navbar';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div className="navbar-spacing"></div>
      <div className="profile-container">
        <h1 className="profile-header">Profile</h1>
        <div className="profile-info">
          <p><strong>Name:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
