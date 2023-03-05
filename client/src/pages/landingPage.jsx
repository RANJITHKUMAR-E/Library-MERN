import React from 'react'
import '../App.css';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const landingPage = () => {
  return (
    <>
    <Navbar/>
    <h1 className='text-center my-5'>Recently Added</h1>
    <div className="div container">
      <div className="row">
        <Card/>
      </div>
    </div>
    <h1 className='text-center my-5 ms-5'>Available Books</h1>
    {/* <form class="text-center col-md-4 me-6 ms-5" role="search">
        <input class="text-center form-control me-2 ms-5" type="search" placeholder="Search " aria-label="Search"/>
    </form> */}
    <div class="d-flex justify-content-center h-100">
        <div class="search">
            <input type="text" class="search-input" placeholder="Search Books" name=""/>
            <a href="#s" class="search-icon">
                <i class="fa fa-search"></i>
            </a>
        </div>
    </div>
    <div className="div container">
      <div className="row">
        <Card/>
      </div>
    </div>
    <div className="div container">
      <div className="row">
        <Card/>
      </div>
    </div>
    </>
  )
}

export default landingPage
