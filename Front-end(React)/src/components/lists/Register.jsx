import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { connect } from "react-redux";
import {  useNavigate } from 'react-router-dom';
const Register = (props)=> {
    // С помощью хука записываем информацию из формы которые вводит пользователь 
    const [user, setUser] = useState({email: '', password: '', name: '', errors : ''})
    const navigate = useNavigate();
    // Функция для регистрации нового пользователя
    const clickhandle = (e)=> {
         e.preventDefault();
         const data = {email : user.email, name: user.name, password: user.password}
         axios.post('http://127.0.0.1:8000/api/auth/register',data)
         .then((res)=> {Cookies.set('token', res.data.access_token); props.Reg( res.data.user); navigate('/Profile')})
         .catch((e)=> setUser({...user, error: 'Пожалуйста, заполните поля правильно!'}))
    }
    return(
        <>
         <div className= {['container'].join(' ')}>
         <h1>{user.error}</h1>
            <form>
         <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Name</label>
    <input className="form-control" onChange={(e)=> setUser({...user, name: e.target.value})} id="exampleFormControlInput1" placeholder="Enter name"/>
  </div>
 <div className="mb-3">
    <label for="exampleFormControlInput2" className="form-label">Email address</label>
    <input type="email" onChange={(e) => setUser({...user, email : e.target.value})} className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
  </div>
   <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label">Password</label>
    <input type="password" onChange={(e) => setUser({...user, password : e.target.value})} className="form-control" id="exampleFormControlInput3" placeholder=" Enter password"/>
   </div>
    <button type="submit" onClick={clickhandle} className="btn btn-primary">Register</button>
   </form>
  </div>
        </>
    )
}
// Изменяем state *Reducer - AuthrReducer*
const mapToDispatchProps = (dispatch)=> {
 return {
    Reg : (user) => dispatch({type : "SET_LOGIN", payload: user})
 }
}
export default connect(null, mapToDispatchProps)( Register);