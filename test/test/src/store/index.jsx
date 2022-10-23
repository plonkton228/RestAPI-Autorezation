import { createStore } from 'redux'

import rootReducer from './reducers/AllReducers'
import AuthRedux from './reducers/AuthReducer';
import ContentReducer from './reducers/ContentReducer';




const stores = createStore(rootReducer);

export default stores;