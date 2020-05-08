import React, { Component } from 'react';

import store from './redux';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import Home from './screens/Home.js';
import Admin from './screens/Admin';
import Restrito from './screens/Restrito';
import Login from './screens/Login';

class App extends Component {
  /* async componentDidMount() {
    let token = localStorage.getItem('token');
    if (!token) {
      const login = await axios.post('http://localhost:3001/users/login', {
        email: 'tuliofaria@devpleno.com',
        passwd: 'abc123',
      });
      token = login.data.token;
      localStorage.setItem('token', token);
    }
    const decoded = jwtDecode(token);
    console.log(decoded);
  }*/
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={Admin} />
          <Route exact path='/restrito' component={Restrito} />
          <Route exact path='/login' component={Login} />
          <div className='App'>
            <Header />
            <p>OK</p>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
