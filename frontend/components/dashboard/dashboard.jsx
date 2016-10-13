import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import PostsContainer from './posts/posts_container';
import NewPostNav from './new_post_nav';
import Sidebar from './sidebar/sidebar'

const Dashboard = ({ currentUser, logout, children }) => (
  <div className="dashboard">
      <HeaderContainer />
      <NewPostNav />
      <PostsContainer />
    {children}
  </div>
);

export default Dashboard;
