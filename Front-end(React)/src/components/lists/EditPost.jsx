import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { connect } from "react-redux";
const EditPost = (props)=> {
    const {id} = useParams();
    const navigate = useNavigate();
    //Функция для передачи данных для создания поста, получаемая из useFetch;
    const [red, setRed] = useState({title: '', description: ''});
    const {data, editData, upData , error} = useFetch();
     // При изменении переменной check получаемый из ContentReducer обновляем посты
    useEffect(()=> {
        editData(id);
      
    },[props.check]) 

    // Функция для обновления поста
    function FetcReq()
    {
      props.SavePost()
      upData(id,red);  
    }
   
    function Back()
    {
      navigate(`/Posts/${data.id}`)
    }
    
    return (<>
     {
       data ? 
       <div className="container">
        <h1>{error}</h1>
        <div className="mb-3">
     <label for="exampleFormControlInput1" className="form-label">Title</label>
     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder= {data.title} onChange={(e)=> setRed({...red, title: e.target.value})}/>
   </div>
   <div className="mb-3">
     <label for="exampleFormControlTextarea1" className="form-label" >Description</label>
     <input className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder= {data.description} onChange={(e)=> setRed({...red, description: e.target.value})}></input>
   </div>
   <div style={{'display': 'flex' , 'justifyContent' :'space-between'}}>
   <button onClick={FetcReq} className="btn btn-primary">Edit</button>
   <button onClick={Back} className="btn btn-primary">Back</button>
   </div>
   
   </div>   
       : 
       <div>Загрузка!</div>
     }
         
        
      
    

    </>)
}
//Функция для изменения state *Reducer - ContentReducer*
const mapToDispatchProps =(dispatch)=> {
    return {
      SavePost: () => dispatch({ type : "SET_POST",  payload : {edit : Math.random()}}),
    }
  }
// Получаем state *Reducer - ContentReducer* для проверки изменений в нашем посте через хук useEffect
const  mapToStateProps = (state) => {
  return {
    check : state.content.edit
  }
}
export default connect(mapToStateProps, mapToDispatchProps)  (EditPost);