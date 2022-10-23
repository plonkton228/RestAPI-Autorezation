import axios from "axios";
import { useState } from "react"

const useFetch = ()=> {
    const [data, setData] = useState();
    
    
    async function getData (){
      
      const data =  await axios.get('http://127.0.0.1:8000/api/auth/posts');
      setData(data.data.posts);
     }

     async function postData(data)
     {
        console.log('hi')
       await axios.post('http://127.0.0.1:8000/api/auth/posts',data).
        then((res)=>console.log(res));
     }

     async function oneData(id)
     {
       
        
        const data =  await axios.get(`http://127.0.0.1:8000/api/auth/post/${id}`);
        setData(data.data);
     }

     async function editData(id)
     {
       
        const data =  await axios.get(`http://127.0.0.1:8000/api/auth/post/${id}/edit`);
        setData(data.data);
     }

     async function upData(id, red)
     {
       
        const data =  await axios.patch(`http://127.0.0.1:8000/api/auth/post/${id}`, red);
    
     }

     async function DeleteData(id)
     {
         await axios.delete(`http://127.0.0.1:8000/api/auth/post/${id}`).then((res)=> console.log(res));
     }
   return {data: data, getData:getData , postData: postData, oneData: oneData, editData: editData, upData:upData, DeleteData: DeleteData}
}
export default useFetch