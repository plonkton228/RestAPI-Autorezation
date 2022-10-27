import { combineReducers } from 'redux'
import AuthRedux from './AuthReducer'
import ContentReducer from './ContentReducer'

const rootReducer = combineReducers({ auth:AuthRedux, content: ContentReducer});
export default rootReducer;