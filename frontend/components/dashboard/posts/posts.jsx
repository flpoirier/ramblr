import React from 'react';
import { Link } from 'react-router';
import Post from './post';

class Posts extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPosts();
  }

  posts() {
    return (
      <div className="posts">
        {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
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
      return this.posts();
    } else {
      return this.filler();
    }
  }

}
export default Posts;
