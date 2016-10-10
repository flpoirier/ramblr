import React from 'react';
import { Link } from 'react-router';

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post_type: this.props.params.post_type,
      title: "",
      body: "",
      image: "",
      quote: "",
      commentary: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = this.state;
    this.props.createPost({post});
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <Link to="/dashboard"><h1>{this.props.params.post_type}</h1></Link><br />
          Title: <input type="text" value={this.state.title} onChange={this.update("title")}/><br /><br />
          Body: <input type="text" value={this.state.body} onChange={this.update("body")}/><br />
          <br /><input type="submit" value="Post" />
        </form>
      </div>
    );
  }

}
export default PostForm;
