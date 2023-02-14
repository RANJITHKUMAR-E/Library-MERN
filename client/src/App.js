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
    <>
      <SignUp />
    </>
  );
};

export default App;