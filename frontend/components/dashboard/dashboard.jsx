import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import PostsContainer from './posts/posts_container';

const Dashboard = ({ currentUser, logout, children }) => (
  <div className="dashboard">
      <HeaderContainer />
      <PostsContainer />
    {children}
  </div>
);

export default Dashboard;
