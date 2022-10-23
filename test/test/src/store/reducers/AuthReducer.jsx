const initialState = {
    loggedIn : false,
    user : {},
}


const AuthRedux = (state = {initialState}, actions)=> {
   switch (actions.type) {
    case "SET_LOGIN":
        
        return {...state, loggedIn : true, user : actions.payload}
   
    case "SET_LOGOUT":
        return {...state, loggedIn: false, user : {}}


    case "UPDATE_USER":
        return {...state, user: actions.payload}
    default:
        return state
   }
}
export  default AuthRedux