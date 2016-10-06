import React from 'react';
import { Link } from 'react-router';
import PostsContainer from '../posts/posts_container';

const Dashboard = ({ currentUser, logout, children }) => (
  <div>
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
    <header>
      <PostsContainer />
    </header>
    {children}
  </div>
);

export default Dashboard;
