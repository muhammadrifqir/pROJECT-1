import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // jika diperlukan untuk async action creators
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
