import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route, Link, Switch, Router} from 'react-router-dom'
import "bootstrap"
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from './pages/Login';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/Admin/adminDashboard';
import AddBook from './pages/Admin/AddBook';
import Profile from './pages/Profile';
import Library from './pages/Library'
import LandingPage from './pages/landingPage';
import History from './pages/History';

const App=() =>
{
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/dashboard/*" exact element={<AdminDashboard />} />
          <Route path="/dashboard/addBook" exact element={<AddBook />} />
          <Route path="/library" element={<Library/>}/>
          <Route path="/landingpage" element={<LandingPage/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;