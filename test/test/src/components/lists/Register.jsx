import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { connect } from "react-redux";
import {  useNavigate } from 'react-router-dom';
const Register = (props)=> {
    const [user, setUser] = useState({email: '', password: '', name: '', confirm_password: '', errors : {}})
    const navigate = useNavigate();
    const clickhandle = (e)=> {
         e.preventDefault();
         const data = {email : user.email, name: user.name, password: user.password, confirm_password : user.confirm_password}
         axios.post('http://127.0.0.1:8000/api/auth/register',data)
         .then((res)=> {Cookies.set('token', res.data.access_token); props.Reg( res.data.user); navigate('/Profile')})
         .catch((e)=> console.log(e))
    }
    return(
        <>
         <div className= {['container'].join(' ')}>
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
   <div className="mb-3">
    <label for="exampleFormControlTextarea2" className="form-label">Password Confirm</label>
    <input type="password" onChange={(e) => setUser({...user, confirm_password : e.target.value })} className="form-control" id="exampleFormControlInput4" placeholder=" Confirm Password"/>
   </div>
    <button type="submit" onClick={clickhandle} className="btn btn-primary">Register</button>
   </form>
  </div>
        </>
    )
}
const mapToDispatchProps = (dispatch)=> {
 return {
    Reg : (user) => dispatch({type : "SET_LOGIN", payload: user})
 }
}
export default connect(null, mapToDispatchProps)( Register);