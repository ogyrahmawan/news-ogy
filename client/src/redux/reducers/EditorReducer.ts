export interface setEditor {
  type: 'SET_EDITOR',
  payload: any
}
interface Editor {
  id: number,
  name: string
  role: string
  email: string
}
interface InitialState {
  data: Editor[]
}
const initialState:InitialState = {
  data: []
}
const editorReducer = (state=initialState, action:setEditor) => {
  switch (action.type) {
    case "SET_EDITOR":
      return {...state, data: action.payload}
    default:
      return state
  }
}

export default editorReducer