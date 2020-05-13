import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Restrito = (props) => {
  if (!props.auth.isAuth) {
    return <Redirect to='/login' />;
  }
  return <h1>Restrito</h1>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Restrito);
