import React from 'react';
import { Provider } from 'react-redux';
//Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//Components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import FrontPageContainer from './front_page/front_page_container';
import DashboardContainer from './dashboard/dashboard_container';
// import PostFormContainer from './post_forms/post_form_container';
import PostFormMain from './post_forms/post_form_main';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/dashboard');
    }
  }

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={FrontPageContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/dashboard" component={DashboardContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/new/:post_type" component={PostFormMain} onEnter={_ensureLoggedIn}/>
          <Route path="/edit/:post_id" component={PostFormMain} onEnter={_ensureLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
