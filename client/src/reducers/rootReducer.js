import { combineReducers } from 'redux'
import postReducer from './post'

const rootReducer = combineReducers({
    posts: postReducer,
})
const initialState = {}

export default rootReducer