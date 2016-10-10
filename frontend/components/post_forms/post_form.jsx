import React from 'react';
import { Link, hashHistory } from 'react-router';

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post_type: this.props.params.post_type,
      title: "",
      body: "",
      image: undefined,
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
    const success = () => { hashHistory.push("/"); };
    this.props.createPost({post}, success);
  }

  postType() {
    const type = this.state.post_type;
    if (type === "text") {
      return (
        <div>
        Title: <input type="text" value={this.state.title} onChange={this.update("title")}/>
        Body: <input type="text" value={this.state.body} onChange={this.update("body")}/>
        </div>
      );
    } else if (type === "quote") {
      return (
        <div>
        Quote: <input type="text" value={this.state.quote} onChange={this.update("quote")}/>
        Attribution: <input type="text" value={this.state.commentary} onChange={this.update("commentary")}/>
        </div>
      );
    } else if (type === "image") {
      return (
        <div>
          Photo: <input type="file" value={this.state.image} onChange={this.update("image")} />
        Commentary: <input type="text" value={this.state.commentary} onChange={this.update("commentary")}/>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <Link to="/dashboard"><h1>{this.props.params.post_type}</h1></Link><br />
          {this.postType()}
          <br /><input type="submit" value="Post" />
        </form>
      </div>
    );
  }

}
export default PostForm;
