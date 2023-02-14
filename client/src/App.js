
import './App.css';
import "bootstrap"
import { BrowserRouter as Router } from 'react-router-dom'
import {Route} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


const App = () => {
  return(
    // <Router>
    //   <Route path='/' exact component={<Home/>}></Route>
    //   <Route path='/login' exact component={<Login/>}></Route>      
    //   <Route path='/signup' exact component={<SignUp/>}></Route>
    // </Router>
    <Home/>
  )
};

export default App;