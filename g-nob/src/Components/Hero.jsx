import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { data, setDate } = useState();
  function show() {
    setDate(alert("Booking is not avaliable for now, check back later"));
  }

  return (
    <>
      <div className="hero container-fluid">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <h2 className="text-light text-center">
            G-NOB VOCATIONAL GLOBAL CONCEPT LIMITED
          </h2>
          <p className="text-light text-center">
            everything services and more...
          </p>
          <div className="text-center">
            <Link
              to="/contact"
              className="hero-btn btn btn-outline-warning text-light"
            >
              Contact Us
            </Link>
            <button className=" hero-btn btn btn-warning" onClick={show}>
              Book Now
            </button>
          </div>
          <hr className="text-warning" />
          <div className="tour-play text-light">
            <div>
              <i class="fa-solid fa-play bg-warning p-3 rounded"></i>
            </div>
            <div>
              <h5>Our Feature Video</h5>
              <p>Watch Video to Learn More</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
