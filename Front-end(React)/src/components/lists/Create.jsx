import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Create = ()=> {
    const [post, setPost] = useState({title: '', description: ''});
    //Функция для передачи данных для создания поста, получаемая из useFetch;
    const{postData,error} = useFetch();
    const DataPost =()=> {
      postData(post);
    }
    return (
        <>
        <div className="container">
        <h1>{error}</h1>
        <div className="mb-3">
         <label for="exampleFormControlInput1" className="form-label">title</label>
         <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Введите заголовок" onChange={(e)=> {setPost({...post, title: e.target.value})}}/>
    </div>
    <div className="mb-3">
       <label for="exampleFormControlTextarea1" className="form-label">Description</label>
       <input className="form-control" id="exampleFormControlTextarea1" placeholder="Введите описание" onChange={(e)=> {setPost({...post, description:e.target.value})}}></input>
    </div>
    <div style = {{display: "flex" , justifyContent: "space-between"}}>
    <button type="button" className="btn btn-primary" onClick={DataPost}>Add Post</button>
    <button  className="btn btn-success" ><Link to ={`/Posts`}><span>Back</span></Link></button>
    </div>
        
        </div>
 
        </>
        
    )
    
 
}

export default  Create;