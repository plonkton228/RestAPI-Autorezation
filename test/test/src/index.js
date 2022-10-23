import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import stores from './store';
import axios from 'axios';
import cookie from "js-cookie"


let token = cookie.get('token');

// const JwtToken = 'nqJKpDf1tQOx4hjwm2e0B2HKJECdSuhS0PqSgc0oyjYOA3NSq2EHwJ4ZKtimcIcD';
console.log(token);
// jwt.verify(token, JwtToken, (err, decoded) => {
//     if(err)
//     {
//       token = null
//       cookie.remove('token')
//     }
//     else {
//       if(decoded.iss !== 'http://127.0.0.1:8000/api/auth/login')
//       {
//         token = null
//         cookie.remove('token')
//       }
//     }
// });
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
  



