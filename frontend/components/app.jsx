import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import PostsContainer from './posts/posts_container';

const App = ({children}) => (
  <div>
    <header>
      <Link to="/" className="header-link"><h1>ramblr.</h1></Link>
      <GreetingContainer />
      <PostsContainer />
    </header>
    {children}
  </div>
);

export default App;
