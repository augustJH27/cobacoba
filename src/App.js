import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Login from './components/Login/Login';
// import SigninPage from './pages/signin';
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path='/signin' component={Login} />
        {/* <Route path='/signin' component={SigninPage} /> */}
        <Route path="/signup" component={SignUp} exact />
      </Switch>
    </Router>
  );
}

export default App;