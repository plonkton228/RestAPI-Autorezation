import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const useFetch = ()=> {
   // с помощью хука храним полученные посты с сервера
    const [data, setData] = useState();
       // с помощью хука храним полученные ошибки
    const [error, setError] = useState();
    let navigate = useNavigate();
    //Запросы к серверу
    async function getData (){
      
      const data =  await axios.get('http://127.0.0.1:8000/api/auth/posts');
      setData(data.data.posts);
     }

     async function postData(data)
     {
    
       await axios.post('http://127.0.0.1:8000/api/auth/posts',data)
       .then(()=> navigate('/Posts'))
       .catch((e)=> setError('Пожалуйста, заполните поля правильно!'))
      
     }

     async function oneData(id)
     {
        const data =  await axios.get(`http://127.0.0.1:8000/api/auth/post/${id}`).
        catch((e)=> setError('Пожалуйста, заполните поля правильно!'))
        setData(data.data);
     }

     async function editData(id)
     {
       
        const data =  await axios.get(`http://127.0.0.1:8000/api/auth/post/${id}/edit`);
        setData(data.data);
     }

     async function upData(id, red)
     {
       
        await axios.patch(`http://127.0.0.1:8000/api/auth/post/${id}`, red)
        .then(()=> navigate(`/Posts/${id}`))
        .catch((e)=> setError('Пожалуйста, заполните поля правильно!'))
        
     }

     async function DeleteData(id)
     {
         await axios.delete(`http://127.0.0.1:8000/api/auth/post/${id}`).then((res)=> console.log(res));
     }
     //Конец запросов\\
   return {data: data, getData:getData , postData: postData, oneData: oneData, editData: editData, upData:upData, DeleteData: DeleteData,error : error}
}
export default useFetch