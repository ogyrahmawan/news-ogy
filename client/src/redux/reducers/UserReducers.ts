import {UserInitialState, UserAction, SET_USER_DATA, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR, LOADING} from '../types'

const initialState: UserInitialState = {
  userData: [],
  success: false,
  error: false,
  loading: false
}

const userReducer = (state = initialState, action: UserAction ) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, userData: action.payload}
    case SET_LOGIN_SUCCESS:
      return {...state, success: true}
    case SET_LOGIN_ERROR:
      return {...state, error: true}
    case LOADING:
      return {...state, loading: !state.loading} 
    default:
      return state
  }
}

export default userReducer