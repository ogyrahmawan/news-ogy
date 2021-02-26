import { SET_ARTICLE, ArticleInitialState, ArticleAction, LOADING } from "../types";

const initialState:ArticleInitialState = {
  data: [],
  loading: false
}

const articleReducer = (state=initialState, action:ArticleAction) => {
  switch (action.type) {
    case SET_ARTICLE:
      return {...state, data: action.payload}
    case LOADING:
      return {...state, loading: !state.loading}
    default:
      return state
  }
}

export default articleReducer