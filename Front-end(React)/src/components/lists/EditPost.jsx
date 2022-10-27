import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { connect } from "react-redux";
const EditPost = (props)=> {
    const [red, setRed] = useState({title:'', description: ''});
    const {id} = useParams();
    const navigate = useNavigate();
    const {data, editData, upData} = useFetch();
 
    useEffect(()=> {
        editData(id);
        
    },[props.check])
    function FetcReq()
    {
       props.SavePost()
        upData(id,red);
        
        navigate(`/Posts/${id}`)
        
    }
    return (<>
    {
        data ?  <div className="container">
        <div className="mb-3">
     <label for="exampleFormControlInput1" className="form-label">Title</label>
     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder= {data.title} onChange={(e)=> setRed({...red, title: e.target.value})}/>
   </div>
   <div className="mb-3">
     <label for="exampleFormControlTextarea1" className="form-label" >Description</label>
     <input className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder= {data.description} onChange={(e)=> setRed({...red, description: e.target.value})}></input>
   </div>
   <button onClick={FetcReq} className="btn btn-primary">Edit</button>
   </div>
        
        
        
        
        
        :  <div></div>
    }

    </>)
}
const mapToDispatchProps =(dispatch)=> {
    return {
      SavePost: () => dispatch({ type : "SET_POST",  payload : {edit : Math.random()}}),
    }
  }

const  mapToStateProps = (state) => {
  return {
    check : state.content.edit
  }
}
export default connect(mapToStateProps, mapToDispatchProps)  (EditPost);