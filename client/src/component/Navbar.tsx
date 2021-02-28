import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { setLoginSuccessAction } from "../redux/actions/UserActions"

const Navbar:React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const handleLogout = () => {
    localStorage.clear()
    history.push('/')
    dispatch(setLoginSuccessAction())
  }
  return (
    <nav className="navbar bg-dark text-white">
      <Link to="/dashboard">
        <h5>kompas</h5>
      </Link>
      <button onClick={() => handleLogout()} className="btn btn-danger">logout</button>
    </nav>
  )
}

export default Navbar