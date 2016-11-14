import React from 'react';
import { Link, browserHistory } from 'react-router';

class EditUserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.state.userpicUrl = "";
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePic = this.updatePic.bind(this);
  }

  image() {
    if (this.state.userpicUrl !== "") {
      return (<div><img src={this.state.userpicUrl}/><br /></div>);
    } else {
      return (<div><img src={this.state.avatar}/><br /></div>);
    }
  }

  updatePic(e) {
    let reader = new FileReader();
    let file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({avatar: file, userpicUrl: reader.result});
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({avatar: null, userpicUrl: ""});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[id]", this.state.id);
    formData.append("user[username]", this.state.username);
    formData.append("user[avatar]", this.state.avatar);
    const success = () => { browserHistory.push("/"); };
    this.props.editUser(formData, success);
  }

  render() {
    return (
      <div className="post-form">
        <form onSubmit={this.handleSubmit}>
          <Link to="/dashboard"><h1 className="new-post-header">edit user avatar</h1></Link>
          <label>Userpic </label><input className="new-post-input-file" type="file" onChange={this.updatePic} /><br /><br />
          {this.image()}
          <br /><input className="new-post-submit" type="submit" value="update avatar"/>
        </form>
      </div>
    );
  }

}

export default EditUserForm;
