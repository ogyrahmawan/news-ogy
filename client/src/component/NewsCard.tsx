import parser from 'html-react-parser'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deleteArticleAction, setSelectedArticle } from '../redux/actions/ArticleAction'
import Swal from 'sweetalert2'
interface Iprops {
  article: any
}

const NewsCard:React.FC<Iprops> = ({article}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleDelete = (id:number) => {
    Swal.fire({
      title: `Do you want to delete ${article.title} ?`,
      showCancelButton: true,
      confirmButtonText: `Delete`
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteArticleAction(id))
      } 
    })
  }
  const handleToEditPage = (id:number) => {
    dispatch(setSelectedArticle(article))

    history.push(`/edit/${id}`)
  }
  return (
    <div  className="card">
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{parser(article.body)}</p>
      </div>
      <div className="btn-action">
        <i onClick={() => handleToEditPage(article.id)} className="fas fa-pencil-alt"></i>
        <i onClick={() => handleDelete(article.id)} className="fas fa-trash"></i>
      </div>
    </div>
  )
}

export default NewsCard