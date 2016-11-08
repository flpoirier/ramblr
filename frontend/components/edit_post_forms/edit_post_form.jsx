import React from 'react';
import { Link, browserHistory } from 'react-router';

class EditPostForm extends React.Component {

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

  componentWillMount() {
    this.props.getPost({id: this.props.postid});
    this.forceUpdate();
  }

  componentWillReceiveProps(newProps) {
    this.state = newProps.post;
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
    if (this.state.image !== "") {
      return (<div><img src={this.state.image}/><br /></div>);
    }
  }

  audio() {
    if (this.state.audio !== "") {
      return (
        <div>
          <video controls height="30px" width="500px" >
            <source src={this.state.audio} type="audio/mpeg"></source>
          </video>
          <br />
        </div>
      );
    }
  }

  video() {
    if (this.state.video !== "") {
      return (
        <div>
          <video controls width="500px" >
            <source src={this.state.video} type="audio/mpeg"></source>
          </video>
          <br />
        </div>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[id]", this.state.id);
    formData.append("post[post_type]", this.state.post_type);
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
    this.props.editPost(formData, success);
  }

  postType() {
    const type = this.props.post.post_type;
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
          Current audio file:
          {this.audio()}
          <label>Commentary </label><textarea className="new-post-input-textarea" value={this.state.commentary} onChange={this.update("commentary")}/>
        </div>
      );
    } else if (type === "video") {
      return (
        <div>
          <label>Video </label><input className="new-post-input-file" type="file" onChange={this.updateVideo} /><br /><br />
          Current video file:
          {this.video()}
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
          <Link to="/dashboard"><h1 className="new-post-header">edit {this.props.post.post_type} post</h1></Link>
          {this.postType()}
          <br /><input className="new-post-submit" type="submit" value="update post"/>
        </form>
      </div>
    );
  }

}
export default EditPostForm;
