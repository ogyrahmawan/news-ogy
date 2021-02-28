import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import FormArticle from '../component/ckeditor'
import Navbar from '../component/Navbar'
import { addArticle } from '../redux/actions/ArticleAction'
import { fetchEditor } from '../redux/actions/UserActions'
import { RootState } from '../redux/store'

const CreateArticle:React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [formInput, setFormInput] = useState({
    title: '',
    body: '',
    writerId: localStorage.id,
    editorId: 0
  })
  const editorList = useSelector((state:RootState) => state.editor.data) 
  useEffect(() => {
    if(!localStorage.access_token) {
      history.push('/')
    }
    if(localStorage.role === "editor") {
      history.push('/dashboard')
    }
  }, [])
  useEffect(() => {
    dispatch(fetchEditor())
  }, [dispatch])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) :void => {
    let name = e.target.name
    let value = e.target.value
    setFormInput({...formInput, [name]: value})
  }
  const handleSubmit = () => {
    dispatch(addArticle(formInput))
    history.push('/dashboard')
  } 
  return(
    <>
    <Navbar>  </Navbar>
    <div className="container p-3 bg-light" style={{minHeight: "100vh"}}>
      <input 
        name="title"
        onChange={handleChange}
        style={{
          width: "100%"
        }} 
        type="text" 
        placeholder="title" 
      />
      <FormArticle setFormInput={setFormInput} formInput={formInput}></FormArticle>
      <div className="editor-input mt-5 d-flex justify-content-center">
        <label>Pick Your Editor</label>
        <select onChange={handleChange} className="ml-3" name="editorId">
          <option value={0} >pick</option>
          {
            editorList.map((item:any) => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))
          }
        </select>
      </div>
        {
          formInput.editorId == 0 ?
          <div className="d-flex justify-content-center text-danger">
          <span>Pick your editor</span>
          </div>
          :
          ""
        }
      <div className="create-article-footer d-flex justify-content-center mt-5 mr-3">
        <button onClick={() => handleSubmit()} className="btn btn-primary mr-3">Save</button>
        <Link to="/dashboard">
            <button className="btn btn-danger">Cancel</button>
          </Link>
      </div>
    </div>
    </>
  )
}
export default CreateArticle