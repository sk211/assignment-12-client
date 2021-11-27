import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="slider-image">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="http://wordpress.templatemela.com/woo/WCM02/WCM020030/WP1/wp-content/uploads/revslider/tm_homeslider/main-banner1-.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>OBILE DEVICE HOLDER</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected of passages ofeven slightly believable.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://techcrunch.com/wp-content/uploads/2019/10/drone_oct-24.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>
            EASY Way Eats delivery via drones
            </h3>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://wordpress.templatemela.com/woo/WCM02/WCM020030/WP1/wp-content/uploads/revslider/tm_homeslider/main-banner2-.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>CUSTOMIZED COMMANDS</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
