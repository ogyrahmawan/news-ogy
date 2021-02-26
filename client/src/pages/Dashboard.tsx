import { useHistory } from "react-router-dom"

const Dashboard:React.FC = () => {
  const history = useHistory()
  return (
    <div className="container bg-light shadow" style={{minHeight: "100vh"}}>
      <button onClick={() => history.push('/newarticle')} className="btn-add">+</button>
    </div>
  )
}

export default Dashboard