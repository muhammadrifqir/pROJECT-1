import { combineReducers } from 'redux'
import provinceReducer from './provinceReducers'

const rootReducer = combineReducers({
  provinceReducer,
})

export default rootReducer
