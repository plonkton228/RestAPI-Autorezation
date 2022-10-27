
import { useMemo, useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MySelect from "../UI/MySelect";
import style from './lists.module.css'
const Posts = (props)=> {
   const [sort , setSort] = useState()
   const [query , setQuery] = useState('');
   let {data,getData} = useFetch();
 
   const some = useEffect(()=> {
      getData();   
    },[props.DeleteIs, props.CreateIs])
    
 const SortPost  = useMemo(()=> {
  if(data)
  {
    if(sort)
    {
      return [...data].sort((a,b) => a[sort].localeCompare(b[sort]));
    }
    else {
      return data
    }
  }
  
    },[data,sort, props.DeleteIs, props.CreateIs])
    

const QueryandSortedPost = useMemo(()=> {
   
      if(data)
      {
        return  [...SortPost].filter((e)=>e.title.toLowerCase().includes(query.toLowerCase()))
       
      }
},[SortPost,query])
    const  SortData = (sort)=> {
       setSort(sort);
    }
    
  
    
    
    return (
        <>
        <div className="container">
          <input placeholder="Поиск" onChange={(e)=> setQuery(e.target.value)}/>
          <MySelect defaultValue='Сортировка по' options={[{title: 'По названию', value:'title'}, {title: 'По описанию', value:'description'}]} value ={sort} onChange = {SortData}/>
        {
          
          QueryandSortedPost ? <table className="table">
            
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            
               {QueryandSortedPost.map((res)=> 
               
               <tbody key={res.id}>
               <tr>
                 <th scope="row" >{res.id}</th>
                 <td>{res.title}</td>
                 <td>{res.description}</td>
                 <td>
                   <Link to = {`${res.id}`}>Show</Link>
                 </td>
               </tr>
             </tbody>
               
               
               )}
          </table>
            : 
            <div>Загрузка</div>
        }
        <button type="button" className="btn btn-primary" onClick={props.Create}><Link to = "Create" className="s"><span>Create</span></Link></button>
        </div>
        </>
    )
}
  const mapToStateProps =(state)=> {
    return {
       DeleteIs: state.content.delete,
       CreateIs: state.content.create,
    }
  }
  const mapToDispatchProps = (dispatch)=> {
    return {
      Create: ()=> dispatch({type: "CREATE_POST", payload : {create : Math.random()}})
    }
  }
export default connect(mapToStateProps, mapToDispatchProps) (Posts);