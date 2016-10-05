import React from 'react';
import { Link } from 'react-router';

const TempComponent = () => (
  <div>My posts will go here!</div>
);

const filler = () => (
  <div></div>
);

const Posts = ({ currentUser, posts }) => {
  if (currentUser) {
    return TempComponent();
  } else {
    return filler();
  }
}

export default Posts;

// //
// const sessionLinks = () => (
//   <nav className="login-signup">
//     <Link to="/login" activeClassName="current">LOGIN</Link>
//     &nbsp;or&nbsp;
//     <Link to="/signup" activeClassName="current">SIGN UP</Link>
//   </nav>
// );
//
// // const personalGreeting = (currentUser, logout) => (
// // 	<hgroup className="header-group">
// // 		<h2 className="header-name">Hi, {currentUser.username}!</h2>
// // 		<button className="header-button" onClick={logout}>Log Out</button>
// // 	</hgroup>
// // );
// //
// // const Greeting = ({ currentUser, logout }) => {
// //   if (currentUser) {
// //     return personalGreeting(currentUser, logout);
// //   } else {
// //     return sessionLinks();
// //   }
// // }
// //
// // export default Greeting;
