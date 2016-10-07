import React from 'react';
import { Link } from 'react-router';

class Posts extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPosts();
  }

  tempComponent() {
    return (
      <div className="posts">
        My posts: {this.props.posts[0].title}
      </div>
    );
  }

  filler() {
    return (
      <div></div>
    );
  }

  render() {
    if (this.props.posts[0]) {
      return this.tempComponent();
    } else {
      return this.filler();
    }
  }

}
export default Posts;