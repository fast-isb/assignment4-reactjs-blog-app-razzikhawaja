import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserFeed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchUserFeed = async () => {
      try {
        const response = await axios.get('your-api-endpoint/feed');
        setFeed(response.data);
      } catch (error) {
        console.error('Error fetching user feed', error.response.data);
      }
    };

    fetchUserFeed();
  }, []);

  return (
    <div>
      <h2>User Feed</h2>
      {feed.length === 0 ? (
        <p>No posts in the user's feed</p>
      ) : (
        <ul>
          {feed.map((post) => (
            <li key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserFeed;
