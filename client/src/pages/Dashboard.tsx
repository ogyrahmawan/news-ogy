import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import Navbar from "../component/Navbar"
import NewsCard from "../component/NewsCard"
import { fetchArticle } from "../redux/actions/ArticleAction"
import { RootState } from "../redux/store"

const Dashboard:React.FC = () => {
  const dispatch = useDispatch()
  const articles = useSelector((state:RootState) => state.article.data)
  useEffect(() => {
    dispatch(fetchArticle())
  }, [])
  const history = useHistory()
  useEffect(() => {
    if(!localStorage.access_token) {
      history.push('/')
    }
  }, [])
  return (
    <>
    <Navbar></Navbar>
    <div className="container bg-light shadow" style={{minHeight: "100vh"}}>
      <div className="container p-3">
        {
          articles.map((item:any) => (
            <NewsCard key={item.id} article={item}></NewsCard>
          ))
        }
      </div>
      <button onClick={() => history.push('/newarticle')} className="btn-add">+</button>
    </div>
    </>
  )
}

export default Dashboard