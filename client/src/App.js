import React from 'react';
import './App.css';
import "bootstrap"
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/landingPage";
import Login from './components/Login';
import Navbar from './components/Navbar';

const App=() =>
{
  return (
    // <Router>
    //   <Route path='/' exact component={<Home/>}></Route>
    //   <Route path='/login' exact component={<Login/>}></Route>      
    //   <Route path='/signup' exact component={<SignUp/>}></Route>
    // </Router>
    <Home />
  )
};

export default App;