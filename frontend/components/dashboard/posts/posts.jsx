import React from 'react';
import { Link } from 'react-router';

const TempComponent = () => (
  <div className="post">My posts will go here!</div>
);

const filler = () => (
  <div></div>
);

const Posts = ({ currentUser, posts }) => {
  if (currentUser) {
    return TempComponent();
  } else {
    return filler();
  }
}

export default Posts;
