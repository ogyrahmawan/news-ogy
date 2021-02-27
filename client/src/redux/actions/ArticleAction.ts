import axios from 'axios'
import { LOADING, SET_ARTICLE, SET_SELECTED_ARTICLE } from '../types'

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

export const setSelectedArticle = (payload:any) => {
  return {
    type: SET_SELECTED_ARTICLE,
    payload
  }
}

export const fetchArticleById = (id:string) => (dispatch: any) => {
  axios({
    url: `/articles/${id}`,
    method: "GET",
    headers: {
      access_token: localStorage.access_token
    }
  })
    .then(res => {
      dispatch(setSelectedArticle(res.data))
    })
    .catch(err => {
      console.log(err)
    })
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
    url: "/articles",
    method: "POST",
    headers: {
      access_token: localStorage.access_token
    },
    data: payload
  })
    .then(res => {
      console.log(res.data)
      dispatch(fetchArticle())
    })
    .catch(err => {
      console.log(err)
    })
}
export const deleteArticleAction = (id:number) => (dispatch:any) => {
  axios({
    url: `/articles/${id}`,
    method: "DELETE",
    headers: {
      access_token: localStorage.access_token
    },
    
  })
    .then(res => {
      dispatch(fetchArticle())
    })
    .catch(err => {
      console.log(err)
    })
}
export const editArticleAction = (payload:any, id:number) => (dispatch:any) => {
  axios({
    url: `/articles/ ${id}`,
    method: "PUT",
    headers: {
      access_token: localStorage.access_token
    },
    data: payload
  })
    .then(res => {
      dispatch(fetchArticle())
    })
    .catch(err => {
      console.log(err)
    })
}