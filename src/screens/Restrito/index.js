import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import Runs from './Runs';

const Restrito = (props) => {
  if (!props.auth.isAuth) {
    return <Redirect to='/login' />;
  }
  const { path } = props.match;
  return (
    <div>
      <h1>Restrito</h1>
      <p>
        <Link to='/restrito'>Home </Link>
        <Link to='/restrito/users'> Runs </Link>
      </p>
      <div>
        <Route exact path={`${path}/`} component={Home} />
        <Route path={`${path}/users/`} component={Runs} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Restrito);
