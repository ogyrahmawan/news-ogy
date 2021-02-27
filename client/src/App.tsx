import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CreateArticle from './pages/CreateArticle';
import Dashboard from './pages/Dashboard';
import EditArticlePage from './pages/EditArticle';
import LoginPage from './pages/Login';
const App:React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage}></Route>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/newarticle" component={CreateArticle} />
          <Route path="/edit/:id" component={EditArticlePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
