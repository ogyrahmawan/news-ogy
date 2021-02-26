import axios from 'axios'
import { LOADING, SET_ARTICLE } from '../types'

export const setArticle = (payload:any) => {
  return {
    type: SET_ARTICLE,
    payload
  }
}
export const setLoading = () => {
  return {
    type: LOADING
  }
}

export const fetchArticle = () => (dispatch: any) => {
  axios({
    url: "/articles",
    method: "GET",
    headers: {
      access_token: localStorage.access_token
    }
  })
    .then(res => {
      console.log(res.data)
      dispatch(setArticle(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const addArticle = (payload:any) => (dispatch: any) => {
  axios({
    url: "articles",
    method: "GET",
    headers: {
      access_token: localStorage.access_token
    }
  })
    .then(res => {
      console.log(res.data)
      dispatch(fetchArticle())
    })
    .catch(err => {
      console.log(err)
    })
}