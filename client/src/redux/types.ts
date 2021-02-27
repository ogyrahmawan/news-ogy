
//TYPES ARTICLE
export const SET_ARTICLE = "SET_ARTICLE"
interface setArticleAction {
  type: typeof SET_ARTICLE
  payload:any
}
export const SET_SELECTED_ARTICLE = "SET_SELECTED_ARTICLE"
interface setSelectedArticle {
  type: typeof SET_SELECTED_ARTICLE
  payload:any
}
export interface Article {
  id: number,
  title:string,
  body:string,
  WriterId:Number,
  EditorId:Number
}
export interface ArticleInitialState {
  data: Article[]
  loading: boolean
  selectedArticle: any
}

export type ArticleAction = setArticleAction | LoadingAction |setSelectedArticle
//TYPES USER
export const LOADING = "LOADING"
export const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS"
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR"
export const SET_USER_DATA = "SET_USER_DATA"

interface LoadingAction {
  type: typeof LOADING
}
export interface UserInitialState {
  userData: any
  success: boolean,
  error: boolean | string,
  loading: boolean
}

interface SetUserData {
  type: typeof SET_USER_DATA,
  payload: any
}
interface SetSuccess {
  type: typeof SET_LOGIN_SUCCESS
}
interface SetError {
  type: typeof SET_LOGIN_ERROR
}

export type UserAction = SetUserData | SetSuccess | SetError | LoadingAction