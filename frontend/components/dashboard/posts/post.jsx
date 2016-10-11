import React from 'react';
import { Link } from 'react-router';

class Post extends React.Component {

  constructor(props) {
    super(props);
  }

  text() {
    return (
      <div className="post group">
        <img className="author-image" src={this.props.post.thumbnail} />
        <div className="post-body">
          <div className="post-author">{this.props.post.author}</div>
          <h1>{this.props.post.title}</h1>
          <p>{this.props.post.body}</p>
          <div className="post-notes">Posted at: {this.props.post.created_at}</div>
        </div>
      </div>
    );
  }

  // how to not make this link to localhost???

  link() {
    return (
      <div className="post group">
        <img className="author-image" src={this.props.post.thumbnail} />
        <div className="post-body">
          <div className="post-author">{this.props.post.author}</div>
          <h1><a href={this.props.post.link}>{this.props.post.link}</a></h1>
          <p className="post-commentary">-- {this.props.post.commentary}</p>
          <div className="post-notes">Posted at: {this.props.post.created_at}</div>
        </div>
      </div>
    );
  }

  image() {
    return (
      <div className="post group">
        <img className="author-image" src={this.props.post.thumbnail} />
        <div className="post-body">
          <div className="post-author">{this.props.post.author}</div>
          <img src={this.props.post.image} />
          <p className="post-commentary">-- {this.props.post.commentary}</p>
          <div className="post-notes">Posted at: {this.props.post.created_at}</div>
        </div>
      </div>
    );
  }

  audio() {
    return (
      <div className="post group">
        <img className="author-image" src={this.props.post.thumbnail} />
        <div className="post-body">
          <div className="post-author">{this.props.post.author}</div>

          <video controls height="30px" width="400px" >
            <source src={this.props.post.audio} type="audio/mpeg"></source>
          </video>

          <p className="post-commentary">-- {this.props.post.commentary}</p>
          <div className="post-notes">Posted at: {this.props.post.created_at}</div>
        </div>
      </div>
    );
  }

  video() {
    return (
      <div className="post group">
        <img className="author-image" src={this.props.post.thumbnail} />
        <div className="post-body">
          <div className="post-author">{this.props.post.author}</div>

          <video controls width="400px" >
            <source src={this.props.post.video} type="audio/mpeg"></source>
          </video>

          <p className="post-commentary">-- {this.props.post.commentary}</p>
          <div className="post-notes">Posted at: {this.props.post.created_at}</div>
        </div>
      </div>
    );
  }

  quote() {
    return (
      <div className="post group">
        <img className="author-image" src={this.props.post.thumbnail} />
        <div className="post-body">
          <div className="post-author">{this.props.post.author}</div>
          <h1>"{this.props.post.quote}"</h1>
          <p className="post-commentary">-- {this.props.post.commentary}</p>
          <div className="post-notes">Posted at: {this.props.post.created_at}</div>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.post.post_type === "text") {
      return this.text();
    } else if (this.props.post.post_type === "quote") {
      return this.quote();
    } else if (this.props.post.post_type === "image") {
      return this.image();
    } else if (this.props.post.post_type === "audio") {
      return this.audio();
    } else if (this.props.post.post_type === "video") {
      return this.video();
    } else if (this.props.post.post_type === "link") {
      return this.link();
    }
  }

}
export default Post;
