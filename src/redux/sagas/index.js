import { takeLatest, all } from 'redux-saga/effects';
import { Types } from '../actionCreators';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

function* login(action) {  
   
    let token = localStorage.getItem('token');
    if (!token) {      
      const login = yield axios.post('http://localhost:3001/users/login', {
        email: action.email, //'tuliofaria@devpleno.com',
        passwd: action.passwd, //'abc123',
      });
      if(login.data.token)  {        
        token = login.data.token;
        localStorage.setItem('token', token);
        
        const user = jwtDecode(token);
        localStorage.setItem('user', user);
      }           
    }
    
  
}

export default function* rootSaga() {
  yield all([
    takeLatest(Types.SIGNIN_REQUEST, login)
  ]);  
}
