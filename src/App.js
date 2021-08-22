import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Upcycle from './components/Upcycle/Upcycle';
import Design from './components/Design/index';
import CustomerPage from './pages/CustomerPage';
import Repeat from './components/Repeat/Repeat';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path='/login' component={Login} />
        <Route path="/register" component={Register} exact />
        <Route path='/upcycle' component={Upcycle} />
        <Route path='/design' component={Design} />
        <Route path='/customer-page' component={CustomerPage} />
        <Route path='/repeat' component={Repeat} />
      </Switch>
    </Router>
  );
}

export default App;