import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/user/profile');

        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user profile', error.response.data);
      }
    };

    fetchUserProfile();
  }, []); 

  return (
    <div>
      <h2>User Profile</h2>
      {userData ? (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default UserProfile;
