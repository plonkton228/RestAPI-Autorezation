import axios from 'axios'
import { useState } from 'react';
import Cookies  from 'js-cookie'
import { connect } from "react-redux";
import {  useNavigate } from 'react-router-dom';
const Login = (props)=> {
   // Храним и изменяем информацию которую вводит пользователь с помощью хука useState
    const [user , setUser] = useState({email: '', password : '', error:''})
    const navigate = useNavigate();
    // Функция для авторизации
    const clickhandle = (e)=> {
        e.preventDefault();
        const data = {email: user.email, password: user.password}
        axios.post('http://127.0.0.1:8000/api/auth/login', data)
        .then((res)=> {Cookies.set('token', res.data.access_token); props.Some(res.data.user); navigate("/Profile")} )
        .catch((e)=> setUser({...user, error: 'Пожалуйста, заполните поля правильно!'}))
    }
    return(
        <>
<div className= {['container'].join(' ')}>
  <h1>{user.error}</h1>
    <form> 
 <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" onChange={(e) => setUser({ ...user, email: e.target.value})} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
   <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label">Password</label>
    <input type="password" onChange={(e) => setUser({...user, password: e.target.value})} className="form-control" id="exampleFormControlInput2" placeholder="Enter password"/>
   </div>
    <button type="submit" onClick={clickhandle} className="btn btn-primary">Login</button>
   </form>
  </div>
  
        </>
    )
}
// Изменяем state *Reducer - AuthrReducer*
const mapDispatchToProps = (dispatch)=> {
  return {
    Some: user => dispatch({type: "SET_LOGIN", payload: user})
  }
}
export default connect(null, mapDispatchToProps) (Login);