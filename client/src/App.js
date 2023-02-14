
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
import PopUp from './components/PopUp';
import Profile from './pages/Profile'; 
import AddBook from './pages/Admin/AddBook';
import BookDetailedView from './pages/BookDetailedView';


const App = () => {
  return(
    // <Router>
    //   <Route path='/' exact component={<Home/>}></Route>
    //   <Route path='/login' exact component={<Login/>}></Route>      
    //   <Route path='/signup' exact component={<SignUp/>}></Route>
    // </Router>
    <AddBook/>
  )
};

export default App;