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
