import { useEffect } from "react";
import { Link,  useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import { connect } from "react-redux";
const Post = (props)=> {
     // Берем функции 
     const {data ,oneData, DeleteData} = useFetch();
    const {id} = useParams();
    // Подгружаем актуальную/измененную информацию о посте
    useEffect(()=> {
        oneData(id);
  },[props.save])
  // Функция для удаления поста
  const Delete = ()=> {
    props.DeletePost();
    DeleteData(id);
  }
    return (
        <>
        {
            data ?  <div className="container">
            <table className="table">
           <thead>
             <tr>
               <th scope="col">id</th>
               <th scope="col">Title</th>
               <th scope="col">Description</th>
               <th scope="col">Actions</th>
             </tr>
           </thead>     
              <tbody>
              <tr>
                <th scope="row">{data.id}</th>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>
                    <div style= {{display: 'flex', justifyContent: "space-between"}}>
                     <button  className="btn btn-success" ><Link to ={`/Posts`}><span>Back</span></Link></button>
                     <button  className="btn btn-success" onClick={props.EditPost} ><Link to ={`/Posts/${data.id}/edit`}><span>Edit</span></Link></button>
                     <form><button type="submit" className="btn btn-danger" onClick={Delete}><Link to ={`/Posts`}><span>Delete</span></Link></button></form>
                    </div>
                  
                </td>
              </tr>
            </tbody>
         </table>
         </div> 
            
            
            
            :<div>Загрузка</div>
        }
         
        </>
    )
}
// Изменяем state *Reducer - ContentReducer*
const mapToDispatchProps =(dispatch)=> {
  return {
    DeletePost: ()=> dispatch({type:"DELETE_POST", payload: {delete: Math.random()}}),
    EditPost: ()=> dispatch({type:"SET_POST", payload: {edit: Math.random()}})
  }
}
// Получаем state *Reducer - ContentReducer* для проверки изменений в нашем посте через хук useEffect
const mapToStateProps =(state)=> {
    return {
       save: state.content.edit
    }
}
export default connect(mapToStateProps, mapToDispatchProps) (Post)