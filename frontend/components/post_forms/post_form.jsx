import React from 'react';
import { Link, hashHistory } from 'react-router';

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post_type: this.props.params.post_type,
      title: "",
      body: "",
      imageUrl: "",
      imageFile: undefined,
      quote: "",
      commentary: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePic = this.updatePic.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updatePic(e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ imageUrl: reader.result, imageFile: file});
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }

  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[post_type]", this.state.post_type);
    formData.append("post[title]", this.state.title);
    formData.append("post[body]", this.state.body);
    if (this.state.imageFile) {
      formData.append("post[image]", this.state.imageFile);
    }
    formData.append("post[quote]", this.state.quote);
    formData.append("post[commentary]", this.state.commentary);
    const success = () => { hashHistory.push("/"); };
    this.props.createPost(formData, success);
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
          <img src={this.state.imageUrl}/><br />
          Photo: <input type="file" onChange={this.updatePic} /><br /><br />
        Commentary: <input type="text" value={this.state.commentary} onChange={this.update("commentary")}/>
        </div>
      );
    } else if (type === "audio") {
      return (
        <div>
          <img src={this.state.imageUrl}/><br />
          Photo: <input type="file" onChange={this.updatePic} /><br /><br />
        Commentary: <input type="text" value={this.state.commentary} onChange={this.update("commentary")}/>
        </div>
      );
    } else if (type === "video") {
      return (
        <div>
          <img src={this.state.imageUrl}/><br />
          Photo: <input type="file" onChange={this.updatePic} /><br /><br />
        Commentary: <input type="text" value={this.state.commentary} onChange={this.update("commentary")}/>
        </div>
      );
    } else if (type === "link") {
      return (
        <div>
          <img src={this.state.imageUrl}/><br />
          Photo: <input type="file" onChange={this.updatePic} /><br /><br />
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
