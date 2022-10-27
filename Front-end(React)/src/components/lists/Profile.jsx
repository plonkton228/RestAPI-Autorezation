import axios from 'axios';
import { connect } from "react-redux";
import { useState } from 'react';
import style from './lists.module.css'
const Profile = (props)=> {
  const [stat, setStat] = useState(true) 
  const [user, setUser] = useState({email: '', name: '', id: 1})

  const Edit = (e)=> {
    e.preventDefault();
    setUser({ ...user, id: props.id});
    props.UpDate(user)
    console.log(props.id);
    console.log(user);
    axios.patch('http://127.0.0.1:8000/api/auth/uPdate', user).then((res)=> console.log(res))
  }
    return(
        <>
          <div className= {style.maincontainer}>
             <div className={style.ProfileContainer}>
               <h1 className= {style.des}>Profile</h1>
               <div className={style.buttonContainer}>
               <button type="button" className="btn btn-info" onClick={()=> setStat(true)}>Info</button>
               <button type="button" className="btn btn-success" onClick={()=> setStat(false)}>EditInfo</button>
               </div>
             </div>
             <div className={style.Profile}>
               <div className={style.InnerProfile}>
                  {
                    stat ? <div className= {style.UserProfile}>
                      <h1>User</h1>
                      <hr></hr>
                      <div className={style.c}>
                        <p>Name: {props.name}</p>
                        <p>Email: {props.email}  </p>
                      </div>
                    </div> 
                    : <div className= {style.UserProfile}>
                    <h1>User</h1>
                    <hr></hr>
                  
                    <form> 
 <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Email</label>
    <input type="email"  className="form-control" id="exampleFormControlInput1" placeholder={props.email} onChange = {(e)=> {setUser({...user, email:e.target.value})}}/>
  </div>
   <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label">Name</label>
    <input type="text"className="form-control" id="exampleFormControlInput2" placeholder={props.name} onChange = {(e)=> {setUser({...user, name:e.target.value})}}/>
   </div>
    <button   className="btn btn-primary" onClick={ (e)=> Edit(e)}>Edit</button>
   </form>
                  </div> 
                  }
               </div>
             </div>
          </div>
        </>
    )
}
const mapToStateProps = (state)=> {
  return {
    name: state.auth.user.name,
    email : state.auth.user.email,
    id: state.auth.user.id
  }
}
const mapToDispatchProps = (dispatch)=> {
 return {
  UpDate : (user)=> dispatch({ type:"UPDATE_USER" ,   payloda:user})
 }
}
export default connect(mapToStateProps, mapToDispatchProps) (Profile);