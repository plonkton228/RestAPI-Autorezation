

import Create from "../lists/Create";
import EditPost from "../lists/EditPost";
import Home from "../lists/Home";
import Login from "../lists/Login";
import Post from "../lists/Post";
import Posts from "../lists/Posts";
import Profile from "../lists/Profile";
import Register from "../lists/Register";

const Routs = ()=> {
  let path;
  let path1;
  path = [{path : '/', element : <Home/>, exact : true },
  {path : '/Register', element : <Register/>, exact : true },
  {path : '/Login', element : <Login/>, exact : true },
  path1 = [
    {path : '/', element : <Home/>, exact : true },
    {path : '/Profile', element : <Profile/>, exact : true },
    {path : '/Posts', element : <Posts/>, exact : true },
    {path : '/Posts/Create', element : <Create/>, exact : true },
    {path : '/Posts/:id', element : <Post/>, exact : true },
    {path : '/Posts/:id/edit', element : <EditPost/>, exact : true },
  ]
]
  return {'Auth': path1 , 'UnAuth' : path};
}
export default Routs;