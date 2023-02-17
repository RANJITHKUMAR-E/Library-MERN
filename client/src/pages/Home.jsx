import React from "react";
import {data} from '../Data/Data.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "../components/Navbar.jsx";
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

// import '../App.css'
const Home = () => {
         var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
     return (    
           
       <div>
       <Navbar/>
        <h2 className="home-heading">New and Trending</h2>
        <div className="book-content">
        <Slider {...settings}>
        {data.map((item) => (
                <div className="card">
                <div className="card-top">
                      <img src={item.bookImage} alt={item.bookName} />
                      <h1>{item.title}</h1>
                </div>
                <div className="card-bottom">
                        <h3>{item.price}</h3>
                        <p>{item.category}</p>
                </div>
                </div>
        ))}
  
        </Slider>
        </div>
        
       
       </div>
        );
}

       



export default Home
