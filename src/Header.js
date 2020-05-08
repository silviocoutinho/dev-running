import React from 'react';
import { connect } from 'react-redux';
import ActionCreators from './redux/actionCreators';

import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <h3>Header</h3>
      <Link to='/'>Home </Link>
      <Link to='/admin'> Admin </Link>
      <Link to='/restrito'> Restrito </Link>
      <Link to='/login'> Login </Link>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (email, passwd) => ActionCreators.signinRequest(email, passwd),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
