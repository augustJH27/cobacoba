import React, {useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Sidebar from './components/Sidebar/index';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Upcycle from './components/Upcycle/Upcycle';
import Design from './components/Design/index';
import Repeat from './components/Repeat/Repeat';

import AuthRoute from './routes/AuthRoute';
import BasicRoute from './routes/BasicRoute';
import { connect } from 'react-redux';
import Production from './components/Production/Production';
import LandingPage from './pages/LandingPage';



const App = ({ checked }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        {checked && (
        <Switch>
        <Route path="/" component={Home} exact />
        <BasicRoute path='/login' component={Login} />
        <BasicRoute path="/register" component={Register} exact />
        <Route path='/upcycle' component={Upcycle} />
        <Route path='/design' component={Design} />
        <AuthRoute path='/' component={LandingPage} />
        <Route path='/production' component={Production} />
        <Route path='/repeat' component={Repeat} />
        </Switch>
        )}
        <Footer />
    </Router>
  );
}
const mapStateToProps = ({ session }) => ({
  checked: session.checked,
});

export default connect(mapStateToProps)(App);