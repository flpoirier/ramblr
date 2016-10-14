import React from 'react';
import { Link, browserHistory } from 'react-router';

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      imageUrl: "",
      imageFile: undefined,
      audioFile: undefined,
      videoFile: undefined,
      quote: "",
      link: "",
      commentary: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePic = this.updatePic.bind(this);
    this.updateAudio = this.updateAudio.bind(this);
    this.updateVideo = this.updateVideo.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.posttype !== this.props.posttype) {
      this.forceUpdate();
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updatePic(e) {
    let reader = new FileReader();
    let file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ imageUrl: reader.result, imageFile: file});
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  updateAudio(e) {
    let reader = new FileReader();
    let file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ audioFile: file});
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ audioFile: null });
    }
  }

  updateVideo(e) {
    let reader = new FileReader();
    let file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ videoFile: file});
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ videoFile: null });
    }
  }

  image() {
    if (this.state.imageUrl !== "") {
      return (<div><img src={this.state.imageUrl}/><br /></div>);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[post_type]", this.props.posttype);
    formData.append("post[title]", this.state.title);
    formData.append("post[body]", this.state.body);
    formData.append("post[quote]", this.state.quote);
    formData.append("post[commentary]", this.state.commentary);
    formData.append("post[link]", this.state.link);
    if (this.state.imageFile) {
      formData.append("post[image]", this.state.imageFile);
    }
    if (this.state.audioFile) {
      formData.append("post[audio]", this.state.audioFile);
    }
    if (this.state.videoFile) {
      formData.append("post[video]", this.state.videoFile);
    }
    const success = () => { browserHistory.push("/"); };
    this.props.createPost(formData, success);
  }

  postType() {
    const type = this.props.posttype;
    if (type === "text") {
      return (
        <div>
        <label>Title </label><input className="new-post-input-text" type="text" value={this.state.title} onChange={this.update("title")}/><br /><br />
        <label>Body </label><textarea className="new-post-input-textarea" value={this.state.body} onChange={this.update("body")}/>
        </div>
      );
    } else if (type === "quote") {
      return (
        <div>
        <label>Quote </label><textarea className="new-post-input-textarea" value={this.state.quote} onChange={this.update("quote")}/><br /><br />
        <label>Attribution </label><input className="new-post-input-text" type="text" value={this.state.commentary} onChange={this.update("commentary")}/>
        </div>
      );
    } else if (type === "image") {
      return (
        <div>
          <label>Photo </label><input className="new-post-input-file" type="file" onChange={this.updatePic} /><br /><br />
          {this.image()}
          <label>Commentary </label><textarea className="new-post-input-textarea" value={this.state.commentary} onChange={this.update("commentary")}/>
        </div>
      );
    } else if (type === "audio") {
      return (
        <div>
          <label>Audio </label><input className="new-post-input-file" type="file" onChange={this.updateAudio} /><br /><br />
          <label>Commentary </label><textarea className="new-post-input-textarea" value={this.state.commentary} onChange={this.update("commentary")}/>
        </div>
      );
    } else if (type === "video") {
      return (
        <div>
          <label>Video </label><input className="new-post-input-file" type="file" onChange={this.updateVideo} /><br /><br />
          <label>Commentary </label><textarea className="new-post-input-textarea" value={this.state.commentary} onChange={this.update("commentary")}/>
        </div>
      );
    } else if (type === "link") {
      return (
        <div>
          <label>Link URL </label><input className="new-post-input-text" type="text" value={this.state.link} onChange={this.update("link")}/>
          <label>Commentary </label><textarea className="new-post-input-textarea" value={this.state.commentary} onChange={this.update("commentary")}/>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="post-form">
        <form onSubmit={this.handleSubmit}>
          {this.postType()}
          <br /><input className="new-post-submit" type="submit" value="create new post"/>
        </form>
      </div>
    );
  }

}
export default PostForm;
