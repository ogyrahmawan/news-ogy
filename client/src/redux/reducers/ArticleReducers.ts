import { SET_ARTICLE, ArticleInitialState, ArticleAction, LOADING, SET_SELECTED_ARTICLE } from "../types";

const initialState:ArticleInitialState = {
  data: [],
  loading: false,
  selectedArticle: {}
}

const articleReducer = (state=initialState, action:ArticleAction) => {
  switch (action.type) {
    case SET_ARTICLE:
      return {...state, data: action.payload}
    case LOADING:
      return {...state, loading: !state.loading}
    case SET_SELECTED_ARTICLE:
      return {...state, selectedArticle: action.payload}
    default:
      return state
  }
}

export default articleReducer