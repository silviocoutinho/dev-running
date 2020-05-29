import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import Runs from './Runs';
import Header from './elements/Header';

const Restrito = (props) => {
  if (!props.auth.isAuth) {
    return <Redirect to='/login' />;
  }
  const { path } = props.match;
  return (
    <div>
        <Header />
        <Route exact path={`${path}/`} component={Home} />
        <Route path={`${path}/users/`} component={Runs} />
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Restrito);
