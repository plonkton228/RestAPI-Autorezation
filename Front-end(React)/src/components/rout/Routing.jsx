import Routs from "./Routs";
import {Routes, Route} from 'react-router-dom';
import { connect } from "react-redux";
const Routing = (props)=> {
    
  return (
 <>
    <Routes>
        {
            props.loggedIn ? 
            Routs().Auth.map((e,index)=> <Route key={index} path= {e.path} element = {e.element} exact = {e.exact} />)
            :Routs().UnAuth.map((e,index)=> <Route key={index} path= {e.path} element = {e.element} exact = {e.exact} />)
        }
    </Routes>
    </>
  )
}
const mapToStateProps = (state)=> {
   return {
    loggedIn: state.auth.loggedIn
   }
}
export default connect(mapToStateProps) (Routing);