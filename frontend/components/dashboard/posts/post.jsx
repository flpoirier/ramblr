import React from 'react';
import { Link } from 'react-router';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
    this.likeIcon = this.likeIcon.bind(this);
  }

  text() {
    return (
      <div className="post group">
        <a href={`http://www.ramblr.cc/blog/${this.props.post.user_id}`}><img className="author-image" src={this.props.post.thumbnail} /></a>
        <div className="post-body">
          <div className="post-author-section">
            <div className="post-author-name"><a href={`http://www.ramblr.cc/blog/${this.props.post.user_id}`}>{this.props.post.author}</a></div>
            <div className="post-header-unfollow">Unfollow</div>
          </div>
          <h1>{this.props.post.title}</h1>
          <p>{this.props.post.body}</p>
          <div className="post-notes">{this.props.post.date_display}</div>
          {this.icons()}
        </div>
      </div>
    );
  }

  // how to not make this link to localhost???

  link() {
    return (
      <div className="post group">
        <a href={`http://www.ramblr.cc/blog/${this.props.post.user_id}`}><img className="author-image" src={this.props.post.thumbnail} /></a>
        <div className="post-body">
          <div className="post-author-section">
            <div className="post-author-name"><a href={`http://www.ramblr.cc/blog/${this.props.post.user_id}`}>{this.props.post.author}</a></div>
            <div className="post-header-unfollow">Unfollow</div>
          </div>
          <h1 className="link-post"><a href={`http://${this.props.post.link}`}>{this.props.post.link}</a></h1>
          <p className="post-commentary">-- {this.props.post.commentary}</p>
          <div className="post-notes">{this.props.post.date_display}</div>
          {this.icons()}
        </div>
      </div>
    );
  }

  image() {
    return (
      <div className="post group">
        <a href={`http://www.ramblr.cc/blog/${this.props.post.user_id}`}><img className="author-image" src={this.props.post.thumbnail} /></a>
        <div className="post-body">
          <div className="post-author-section">
            <div className="post-author-name"><a href={`http://www.ramblr.cc/blog/${this.props.post.user_id}`}>{this.props.post.author}</a></div>
            <div className="post-header-unfollow">Unfollow</div>
          </div>
          <img src={this.props.post.image} />
          <p className="post-commentary">-- {this.props.post.commentary}</p>
          <div className="post-notes">{this.props.post.date_display}</div>
          {this.icons()}
        </div>
      </div>
    );
  }

  audio() {
    return (
      <div className="post group">
        <a href={`http://www.ramblr.cc/blog/${this.props.post.user_id}`}><img className="author-image" src={this.props.post.thumbnail} /></a>
        <div className="post-body">
          <div className="post-author-section">
            <div className="post-author-name"><a href={`http://www.ramblr.cc/blog/${this.props.post.user_id}`}>{this.props.post.author}</a></div>
            <div className="post-header-unfollow">Unfollow</div>
          </div>

          <video controls height="30px" width="500px" >
            <source src={this.props.post.audio} type="audio/mpeg"></source>
          </video>

          <p className="post-commentary">-- {this.props.post.commentary}</p>
          <div className="post-notes">{this.props.post.date_display}</div>
          {this.icons()}
        </div>
      </div>
    );
  }

  video() {
    return (
      <div className="post group">
        <a href={`http://www.ramblr.cc/blog/${this.props.post.user_id}`}><img className="author-image" src={this.props.post.thumbnail} /></a>
        <div className="post-body">
          <div className="post-author-section">
            <div className="post-author-name"><a href={`http://www.ramblr.cc/blog/${this.props.post.user_id}`}>{this.props.post.author}</a></div>
            <div className="post-header-unfollow">Unfollow</div>
          </div>

          <video controls width="500px" >
            <source src={this.props.post.video} type="audio/mpeg"></source>
          </video>

          <p className="post-commentary">-- {this.props.post.commentary}</p>
          <div className="post-notes">{this.props.post.date_display}</div>
          {this.icons()}
        </div>
      </div>
    );
  }

  quote() {
    return (
      <div className="post group">
        <a href={`http://www.ramblr.cc/blog/${this.props.post.user_id}`}><img className="author-image" src={this.props.post.thumbnail} /></a>
        <div className="post-body">
          <div className="post-author-section">
            <div className="post-author-name"><a href={`http://www.ramblr.cc/blog/${this.props.post.user_id}`}>{this.props.post.author}</a></div>
            <div className="post-header-unfollow">Unfollow</div>
          </div>
          <h1>"{this.props.post.quote}"</h1>
          <p className="post-commentary">-- {this.props.post.commentary}</p>
          <div className="post-notes">{this.props.post.date_display}</div>
          {this.icons()}
        </div>
      </div>
    );
  }

  icons() {
    if (!this.props.currentUser) {
      return;
    }
    if (this.props.currentUser.id === this.props.post.user_id) {
      return (
        <div className="post-footer-icons">
          <button className="fa-button" onClick={this.delete}><i className="fa fa-trash" aria-hidden="true" /></button>
          <button className="fa-button"><a href={`edit/${this.props.post.id}`}><i className="fa fa-pencil-square-o " aria-hidden="true" /></a></button>
          {this.likeIcon()}
          <div className="num-likes">{this.props.post.likes.length} likes</div>
        </div>
      );
    } else {
      return (
        <div className="post-footer-icons">
          {this.likeIcon()}
          <div className="num-likes">{this.props.post.likes.length} likes</div>
        </div>
      );
    }
  }

  likeIcon() {
    if (this.props.post.liked) {
      return (
        <button className="fa-button" onClick={this.dislike}><i className="fa fa-heart" aria-hidden="true" /></button>
      );
    } else {
      return (
        <button className="fa-button" onClick={this.like}><i className="fa fa-heart-o" aria-hidden="true" /></button>
      );
    }
  }

  like() {
    this.props.likePost({post_id: this.props.post.id});
  }

  dislike() {
    this.props.dislikePost({post_id: this.props.post.id});
  }

  delete() {
    this.props.deletePost(this.props.post);
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
