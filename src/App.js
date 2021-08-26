import React, {useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AuthProvider } from './helpers/AuthContext';

import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Sidebar from './components/Sidebar/index';
import Home from './pages/HomePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Upcycle from './components/Upcycle/Upcycle';
import Design from './components/Design/index';
import CustomerPage from './pages/CustomerPage';
import Repeat from './components/Repeat/Repeat';

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <Router>
      <AuthProvider>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path='/login' component={Login} />
        <Route path="/register" component={Register} exact />
        <Route path='/upcycle' component={Upcycle} />
        <Route path='/design' component={Design} />
        <Route path='/customer-page' component={CustomerPage} />
        <Route path='/repeat' component={Repeat} />
      </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;