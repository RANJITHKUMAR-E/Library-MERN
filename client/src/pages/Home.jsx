import React, { useRef } from "react";
import { data } from "../Data/Data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emailjs from "@emailjs/browser";
import { Button } from "react-bootstrap";

import "./Home.css";

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3mq7gs5",
        "template_zika8db",
        form.current,
        "CCPljq9hfAuSSenoW"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="home">
      <div
        className="aboutUs row m-5"
        style={{
          backgroundImage: `url(
           
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Qs7ZjLgHKz9-_IKvUKrp4usBoUr-p-ZxZb4MVy80vfXL2znx1A-0ocjEnjr0XhQjkeE&usqp=CAU"
          ), noRepeat`,
        }}
      >
        <div className="col-md-6 col-sm-5 p-5">
          <center>
            <h1
              className="homeFont "
              style={{
                fontFamily: "Bebas Neue",
                textShadow: "1px 1px 2px grey",
                color: "black",
              }}
            >
              e Library Application
            </h1>
          </center>
          <div className="row w-100 justify-content-center">
            <div className="col-md-10 px-5">
              <img
                className="img-fluid"
                // src="https://thumbs.dreamstime.com/b/ebook-abstract-concept-vector-illustration-searchable-digital-library-education-reading-online-easy-access-knowledge-elearning-200915844.jpg"
                src="https://cdn.dribbble.com/users/4218498/screenshots/7409408/gif_boreali_ghigliazza.gif"
                alt=""
              />
            </div>
            <div className="col-md-12 py-5 justify-content">
              <h5 className="" style={{ textAlign: "justify" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
                illo tempora voluptatibus quaerat aperiam officia minima quia
                animi aliquam unde deleniti facere expedita deserunt
                necessitatibus!
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-5 justify-content-center">
          <img
            src="https://mintbook.com/assetsNew/img/animated5.gif"
            alt=""
            style={{ height: "90vh", width: "100%" }}
          />
        </div>
      </div>
      <div className="trendings py-5">
        <div className="App-Home">
          <div className="home-heading">
            <marquee className="text-black fs-1.5" width="40%" direction="left">
              New And Trending
            </marquee>
          </div>

          <div className="book-content">
            <Slider {...settings}>
              {data.map((item) => (
                <div className="bookCard">
                  <div className="bookCard-top">
                    <img src={item.bookImage} alt={item.bookName} />
                    <h1>{item.title}</h1>
                  </div>
                  <div className="bookCard-bottom">
                    <h6>Rs.{item.price}</h6>
                    <p>{item.category}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="bookpage">
        <div className="home-heading">
          <marquee width="70%" direction="left">
            Most Reads 💻
          </marquee>
        </div>
        <div className="">
          <div className="row">
            <div className="d-flex">
              <div className="">
                <div className="d-flex w-100 justify-content-center align-content-center flex-wrap">
                  {data.map((book) => (
                    <>
                      {/* <img src={book.bookImage} alt={book.bookName} /> */}
                      <div className="book-align m-5 justify-content-center">
                        <div className="book-img p-5 ">
                          <img
                            src={book.bookImage}
                            className="card-img-top"
                            alt={book.bookName}
                          />
                        </div>
                        <div className=" card-body">
                          <h5 className="card-title">{book.bookName}</h5>
                          <p className="card-text">{book.category}</p>
                          <p className="card-text">{book.authorName}</p>
                          <Button>Read Now</Button>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="form-area">
          <div className="container">
            <div className="row single-form g-0">
              <div className="col-sm-12 col-lg-6">
                <div className="left">
                  <h2>
                    <span>Contact Us For</span>Enquiries
                  </h2>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 ">
                <div className="right">
                  <i className="fa fa-caret-left"></i>
                  <form ref={form} onSubmit={sendEmail}>
                    <div class="form-group">
                      <label>Your Name</label>
                      <input
                        id="fullName"
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        name="fullName"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div class="form-group">
                      <label>Email Address</label>
                      <input
                        id="email_id"
                        type="email"
                        class="form-control"
                        name="email_id"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div class="form-group">
                      <label>Message</label>
                      <textarea
                        id="message"
                        class="form-control"
                        name="message"
                        placeholder="Message"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer style={{ background: "black" }}>
        <h1 style={{ color: "white" }}>2024:Copyright: @Library.com</h1>
      </footer>
    </div>
  );
};

export default Home;
