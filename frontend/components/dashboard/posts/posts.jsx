import React from 'react';
import { Link } from 'react-router';
import PostContainer from './post_container';

class Posts extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFollows();
    if (typeof this.props.userid !== 'undefined') {
      this.props.requestPosts(this.props.userid);
    } else {
      this.props.requestPosts("none");
    }
  }

  onDashboard() {
    if (typeof this.props.userid !== 'undefined') {
      return false;
    } else {
      return true;
    }
  }


  following(user_id) {
    let usr_following = false;
    this.props.follows.forEach((follow) => {
      if (follow.followed_user_id === user_id) {
        usr_following = true;
      } else if (this.props.currentUser.id === user_id) {
        usr_following = "self";
      }
    });
    return usr_following;
  }

  posts() {
    return (
      <div className="posts">
        {this.props.posts.map((post) => <PostContainer key={post.id} post={post} following={this.following(post.user_id)} dashboard={this.onDashboard()}/>)}
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
