import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import PostsContainer from './posts/posts_container';
import NewPostNav from './new_post_nav';
import SidebarContainer from './sidebar/sidebar_container'

const Dashboard = ({ currentUser, logout, children, params }) => (
  <div className="dashboard">
      <HeaderContainer />
      <NewPostNav />
      <PostsContainer userid={params.user_id}/>
      <SidebarContainer userid={params.user_id}/>
    {children}
  </div>
);

export default Dashboard;
