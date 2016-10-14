import React from 'react';
import { Link, browserHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
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
			<ul>
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
  					<h1><Link to="/">{this.props.formType}</Link></h1>
  					{ this.renderErrors() }
  					<div className="login-form">
  						<br/>
  						<label> Username:
                <br></br>
                <input type="text"
  								value={this.state.username}
  								onChange={this.update("username")}
  								className="login-input" />
  						</label>
              <br />
  						<br/>
  						<label> Password:
                <br></br>
                <input type="password"
  								value={this.state.password}
  								onChange={this.update("password")}
  								className="login-input" />
  						</label>

  						<br/><br/>
  						<input className="login-input" type="submit" value="Submit" />
  					</div>
  				</form>
  			</div>
      </span>
		);
	}

}

export default SessionForm;
