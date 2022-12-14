import {Link, useNavigate} from 'react-router-dom'
import { connect } from "react-redux";
import Cookies from 'js-cookie';
const NavBar = (props)=> {
 let navigate = useNavigate();
// Функция для выхода 
  const LogOut = ()=> {
      Cookies.remove('token');
      props.LogOut();
      navigate('/Home')
  }
  return (
    <>
    {
      // Проверка на авторизацию через переменную из props
        props.loggedIn ?      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to = '/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = 'Profile'>Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = 'Posts'>Posts</Link>
              </li>
            </ul>
          </div>
          <button type="button" className="btn btn-primary" onClick={LogOut}>LogOut</button>
        </div>
        
      </nav>
        :      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to = '/'>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to = 'Login'>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to = 'Register'>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    }

    
    </>
  )
}
//Достаем из хранилища  state *Reducer - AuthrReducer*
const mapToStateProps = (state)=> {
   return {
     loggedIn : state.auth.loggedIn
   }
}
//Функция для изменения state *Reducer - AuthrReducer*
const mapToDispatchProps = (dispatch)=> {
   return {
    LogOut : ()=> {dispatch({type: "SET_LOGOUT"})}
   }
}
export default connect(mapToStateProps, mapToDispatchProps)  (NavBar);