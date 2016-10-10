import React from 'react';
import { Link } from 'react-router';

class PostForm extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit() {
    console.log("THIS BUTTON DOESN'T DO ANYTHING");
  }

  render() {
    return (
      <div>
        <h1>{this.props.params.post_type}</h1>
        Title: <input type="text" /><br />
        Body: <textarea /><br />
        <button onClick={this.handleSubmit} type="submit">Post</button>
      </div>
    );
  }

}
export default PostForm;
