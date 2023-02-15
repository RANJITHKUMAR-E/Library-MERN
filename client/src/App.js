import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ReactDOM } from 'react';
import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/landingPage";
import History from './pages/History';

import "bootstrap"
import Library from './pages/Library';

const App=() =>
{
  return (
    <>
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/landingpage" element={<LandingPage/>}/>
          <Route path="/history" element={<History/>}/>
         </Routes>
    
    </BrowserRouter>
      </div>
    </>
  );
};

export default App;