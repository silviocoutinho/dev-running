import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => <h1>Home Admin</h1>;
const Users = (props) => {
  return (
    <div>
      <h1>Users Admin</h1>
    </div>
  );
};

const Admin = (props) => {
  const { path } = props.match;
  if (!props.auth.isAuth) {
    return <Redirect to='/login' />;
  }
  if (props.auth.user.role !== 'admin') {
    return <Redirect to='/restrito' />;
  }
  return (
    <div>
      <h1>Admin</h1>
      <p>
        <Link to='/admin'>Home </Link>
        <Link to='/admin/users'> Users </Link>
      </p>
      <div>
        <Route exact path={`${path}/`} component={Home} />
        <Route path={`${path}/users/`} component={Users} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Admin);
