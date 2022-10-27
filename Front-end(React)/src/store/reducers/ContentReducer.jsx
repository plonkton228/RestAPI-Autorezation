const initialState = {
    post : {edit: 1, delete : 1, create : 1}
}



const ContentReducer = (state ={initialState}, action)=> {
    switch (action.type) {
        case "SET_POST":
            
            return {...state , edit : action.payload.edit}
    
        case "DELETE_POST":
            return {...state, delete : action.payload.delete}
            case "CREATE_POST":
                return {...state, create : action.payload.create}
        
        default:
            return state;
    }
}
export default ContentReducer