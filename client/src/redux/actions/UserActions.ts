import axios from 'axios'
import { LOADING, SET_LOGIN_ERROR, SET_LOGIN_SUCCESS, SET_USER_DATA } from '../types'
interface LoginViaEmailData {
  email: string
  password: string
}

export const setLoginSuccessAction = () => {
  return {
    type: SET_LOGIN_SUCCESS
  }
}

export const setLoginErrorAction = () => {
  return {
    type: SET_LOGIN_ERROR
  }
}

export const setLoginUserDataAction = (payload: any) => {
  return {
    type: SET_USER_DATA,
    payload
  }
} 
export const setLoadingAction = () => {
  return {
    type: LOADING
  }
}
export const Login = (data: LoginViaEmailData) => (dispatch: any) => {
  dispatch(setLoadingAction())
    axios({
      url: 'http://localhost:4000/login',
      method: 'POST',
      data: data
    })
    .then((res:any) =>{
      dispatch(setLoginSuccessAction())
      localStorage.setItem('access_token', res.data.access_token)
      localStorage.setItem('name', res.data.name)
      localStorage.setItem('id',res.data.id)
      localStorage.setItem('role',res.data.role)
      dispatch(setLoginUserDataAction(res.data.email))
    })
    .catch((err:any) => {
      dispatch(setLoginErrorAction())
      console.log(err)
    })
    .finally(() => {
      dispatch(setLoadingAction())
    })
}

export const setEditor = (payload:any) => {
  return {
    type: 'SET_EDITOR',
    payload
  }
}
export const fetchEditor = () => (dispatch:any) => {
  axios({
    url: "/editors",
    method: "GET"
  })
    .then(res => {
      dispatch(setEditor(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}