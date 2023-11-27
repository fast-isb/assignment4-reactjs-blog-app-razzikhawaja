import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import UserProfile from './components/Auth/UserProfile';
import CreatePost from './components/Blog/CreatePost';
import PostList from './components/Blog/PostList';
import SearchResults from './components/Search/SearchResults';
import UserFeed from './components/Feed/UserFeed';
import './navstyle.css';

const App = () => {
  return (
    <Router>
      <div>
        {}
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/create-post">Create Post</Link>
            </li>
            <li>
              <Link to="/posts">Post List</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
          </ul>
        </nav>

        {}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/feed" element={<UserFeed />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
