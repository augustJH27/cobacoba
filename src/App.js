import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import LandingPage from './pages/LandingPage';
import HeadphonesPage from './pages/HeadphonesPage';
import SpeakersPage from './pages/SpeakersPage';
import EarphonePage from './pages/EarphonesPage';
import EachProductPage from './pages/EachProductPage';
import CheckoutPage from './pages/CheckoutPage';
import SignUp from './components/SignUp/SignUp';
// import Footer from './components/Footer/Footer';

// import DetailHeadphone from "./components/DetailPage/detailHeadphone";
// import Headphone from "./pages/category/headphones/Headphones";


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/earphones'>
          <EarphonePage />
        </Route>
        <Route exact path='/headphones'>
          <HeadphonesPage />
        </Route>
        <Route exact path='/speakers'>
          <SpeakersPage />
        </Route>
        <Route exact path='/checkout'>
          <CheckoutPage />
        </Route>
        <Route exact path='/create-account'>
          <SignUp />
        </Route>
        <Route path='/product/:id' children={<EachProductPage />} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;