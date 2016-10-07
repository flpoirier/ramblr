import React from 'react';
import { Link } from 'react-router';

class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      posts: this.props.posts
    };
  }

  tempComponent() {
    return (
      <div className="posts">My posts will go here!</div>
    );
  }

  filler() {
    return (
      <div></div>
    );
  }

  render() {
    if (this.props.currentUser) {
      return this.tempComponent();
    } else {
      return this.filler();
    }
  }

}
export default Posts;
