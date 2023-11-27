import React, { useState } from 'react';
import axios from 'axios'; 

const CreatePost = () => {
  const [postContent, setPostContent] = useState('');

  const handleCreatePost = async () => {
    try {
      // Make an API request to create a new blog post
      const response = await axios.post('http://localhost:3000/posts', {
        content: postContent,
      });

      console.log('Blog Post Created', response.data);

      setPostContent('');
    } catch (error) {
      console.error('Error creating blog post', error.response.data);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="Write your blog post here..."
        rows="8"
        cols="50"
      />

      <button type="button" onClick={handleCreatePost}>
        Create Post
      </button>
    </div>
  );
};

export default CreatePost;
