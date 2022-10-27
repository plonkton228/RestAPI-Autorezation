import { createStore } from 'redux'
import rootReducer from './reducers/AllReducers'

const stores = createStore(rootReducer);

export default stores;