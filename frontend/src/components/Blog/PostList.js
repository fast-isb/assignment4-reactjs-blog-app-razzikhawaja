import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts');

        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts', error.response.data);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No blog posts available</p>
      ) : (
        <ul>
          {posts.map((post) => (
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

export default PostList;
