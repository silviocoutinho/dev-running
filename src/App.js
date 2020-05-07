import React, { Component } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

class App extends Component {
  async componentDidMount() {
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
  }
  render() {
    return (
      <div className='App'>
        <p>OK</p>
      </div>
    );
  }
}

export default App;
