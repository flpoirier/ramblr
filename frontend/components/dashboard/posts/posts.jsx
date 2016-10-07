import React from 'react';
import { Link } from 'react-router';

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
        {this.props.posts.map((post) => <div key={post.id}>{post.title}<br />{post.body}<hr/></div>)}
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
