import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import articleReducer from './reducers/ArticleReducers'
import editorReducer from './reducers/EditorReducer'
import userReducer from './reducers/UserReducers'
const rootReducers = combineReducers({
  user: userReducer,
  article: articleReducer,
  editor: editorReducer
})

const store = createStore(
  rootReducers,
  applyMiddleware(thunk)
)
export type RootState = ReturnType<typeof rootReducers> 
export default store