import React from 'react';
import { Link } from 'react-router';
import PostContainer from './post_container';

class Posts extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (typeof this.props.userid !== 'undefined') {
      this.props.requestPosts(this.props.userid);
    } else {
      this.props.requestPosts("none");
    }
  }

  posts() {
    return (
      <div className="posts">
        {this.props.posts.map((post) => <PostContainer key={post.id} post={post} />)}
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
