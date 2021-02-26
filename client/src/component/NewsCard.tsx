import parser from 'html-react-parser'

interface Iprops {
  article: any
}
const NewsCard:React.FC<Iprops> = ({article}) => {
  return (
    <div key={article.id} className="card">
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{parser(article.body)}</p>
      </div>
    </div>
  )
}

export default NewsCard