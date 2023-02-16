import React from 'react';
import {BrowserRouter, Routes, Route, Link, Switch, Router} from 'react-router-dom'
import "bootstrap"
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/landingPage";
import Login from './components/Login';
import Navbar from './components/Navbar';


const App=() =>
{
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;