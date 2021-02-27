import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import FormArticle from '../component/ckeditor'
import { addArticle, editArticleAction, fetchArticleById } from '../redux/actions/ArticleAction'
import { fetchEditor } from '../redux/actions/UserActions'
import { RootState } from '../redux/store'

const EditArticlePage:React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {id} = useParams<{id:string}>()
  const article = useSelector((state: RootState) => state.article.selectedArticle)
  console.log(article, 'test')
  const [formInput, setFormInput] = useState({
    title: article.title,
    body: article.body,
    writerId: article.WriterId,
    editorId: article.EditorId
  })
  const editorList = useSelector((state:RootState) => state.editor.data) 
  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [])
  useEffect(() => {
    let obj = {
      title: article.title,
      body: article.body,
      writerId: article.WriterId,
      editorId: article.EditorId
    }
    setFormInput(obj)
  }, [article])
  useEffect(() => {
    dispatch(fetchEditor())
  }, [dispatch])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) :void => {
    let name = e.target.name
    let value = e.target.value
    setFormInput({...formInput, [name]: value})
  }
  const handleSubmit = () => {
    dispatch(editArticleAction(formInput, article.id))
    history.push('/dashboard')
  } 
  if(!article.title) {
    return <h1>loading</h1>
  } else {
    return(
      <div className="container bg-light" style={{minHeight: "100vh"}}>
        <input 
          value={formInput.title}
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
          <select value={formInput.editorId} onChange={handleChange} name="editorId">
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
}
export default EditArticlePage