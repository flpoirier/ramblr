import React from 'react';
import { Link, browserHistory } from 'react-router';

class EditUserForm extends React.Component {

  constructor(props) {
    super(props);
    this.userpicUrl = "";
    this.state = this.props.currentUser;
  }

  image() {
    if (this.userpicUrl !== "") {
      return (<div><img src={this.userpicUrl}/><br /></div>);
    } else {
      return (<div><img src={this.state.avatar}/><br /></div>);
    }
  }

  updatePic(e) {
    let reader = new FileReader();
    let file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({avatarFile: file});
      this.userpicUrl = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({avatarFile: null});
      this.userpicUrl = "";
    }
  }

  handleSubmit() {

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
