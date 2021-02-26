import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormArticle from '../component/ckeditor'
import { addArticle } from '../redux/actions/ArticleAction'
import { fetchEditor } from '../redux/actions/UserActions'
import { RootState } from '../redux/store'

const CreateArticle:React.FC = () => {
  const dispatch = useDispatch()
  const [formInput, setFormInput] = useState({
    title: '',
    body: '',
    writerId: localStorage.id,
    editorId: 0
  })
  const editorList = useSelector((state:RootState) => state.editor.data) 

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
  } 
  return(
    <div className="container bg-light" style={{minHeight: "100vh"}}>
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
      <div className="editor-input mt-5">
        <label>Pick Your Editor</label>
        <select onChange={handleChange} name="editorId">
          {
            editorList.map((item:any) => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))
          }
        </select>
      </div>
      <div className="create-article-footer d-flex justify-content-end mt-5 mr-3">
        <button onClick={() => handleSubmit()} className="btn btn-primary mr-3">Save</button>
        <button className="btn btn-danger">Cancel</button>
      </div>
    </div>
  )
}
export default CreateArticle