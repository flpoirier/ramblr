import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import PostsContainer from './posts/posts_container';
import NewPostNav from './new_post_nav';
import SidebarContainer from './sidebar/sidebar_container'

const Dashboard = ({ currentUser, logout, children }) => (
  <div className="dashboard">
      <HeaderContainer />
      <NewPostNav />
      <PostsContainer />
      <SidebarContainer />
    {children}
  </div>
);

export default Dashboard;
