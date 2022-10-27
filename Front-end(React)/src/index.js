import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import stores from './store';
import axios from 'axios';
import cookie from "js-cookie"

//Подхватываем токен юзера если таковой есть в cookie
let token = cookie.get('token');
const render = ()=> {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Provider store={stores}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}

if(token)
{ 
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.post("http://127.0.0.1:8000/api/auth/me")
.then((res)=> {stores.dispatch({type: "SET_LOGIN", payload : res.data}); render()})
 token = cookie.get('token');
}
else {
render()

}
  



