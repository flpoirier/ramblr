import React from 'react';
import { Link, browserHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
		};
    if (this.props.formType === "login") {
      this.state.formType = "login";
    } else if (this.props.formType === "signup") {
      this.state.formType = "sign up";
    }
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  // componentWillReceiveProps(newProps) {
  //   if (newProps.route.path !== this.props.route.path) {
  //     this.props.errors = [];
  //   }
  // }

	componentDidUpdate() {
    this.state.username = "";
    this.state.password = "";
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn) {
			browserHistory.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	renderErrors() {
		return(
			<ul className="login-errors">
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
      <span className="login-form-parent">
  			<div className="login-form-container">
  				<form onSubmit={this.handleSubmit} className="login-form-box">
  					<h1><Link to="/">{this.state.formType}</Link></h1>
  					{ this.renderErrors() }
  					<div className="login-form">
  						<br/>
  						<label className="login-label">Username</label>
                <br></br>
                <input type="text"
  								value={this.state.username}
  								onChange={this.update("username")}
  								className="login-input" />
              <br />
  						<br/>
  						<label className="login-label">Password</label>
                <br></br>
                <input type="password"
  								value={this.state.password}
  								onChange={this.update("password")}
  								className="login-input" />
  						<br/><br/>
  						<input className="login-button" type="submit" value="Submit" />
  					</div>
  				</form>
  			</div>
      </span>
		);
	}

}

export default SessionForm;
