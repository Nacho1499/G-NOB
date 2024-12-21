import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import sec from "../assets/security.jpg";
import art from "../assets/art.jpg";
import cap from "../assets/capentry.jpg";
import farm from "../assets/farm.jpg";
import brick from "../assets/brick.jpg";
import plum from "../assets/plum.jpg";
import { Link } from "react-router-dom";
import Scroll from "./Scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Traning = () => {
   useEffect(() => {
      AOS.init();
    }, []);
  return (
    <>
    <Scroll/>
      <Navbar />
      <div className="training container-fluid mb-4">
        <div className="text-center">
          <h5 className="text-light" data-aos="zoom-in"
              data-aos-duration="1000">G-NOB VOCATIONAL CENTER</h5>
        </div>
      </div>
      <div className="container p-3 mt-5 mb-4">
        <h5>Welcome to G-NOB Vocational and training center where possibilities <br /> meet opportunities </h5>
        <hr className="text-warning" />
        <div className="row g-3 p-2 mt-4">
          <div className="col-12 col-lg-4" data-aos="zoom-in"
              data-aos-duration="1000">
            <img className="voca img-fluid" src={sec} alt="" />
            <h5  className="mt-4">Security</h5>
            <Link to="/vocationform" className="btn btn-outline-warning">Apply Here</Link>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-in"
              data-aos-duration="1000">
            <img className="voca img-fluid" src={farm} alt="" />
            <h5 className="mt-4">Farming</h5>
            <Link to="/vocationform" className="btn btn-outline-warning">Apply Here</Link>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-in"
              data-aos-duration="1000">
            <img className=" voca img-fluid" src={plum} alt="" />
            <h5  className="mt-4">Plumbring</h5>
            <Link to="/vocationform" className="btn btn-outline-warning">Apply Here</Link>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-in"
              data-aos-duration="1000">
            <img className="voca img-fluid" src={brick} alt="" />
            <h5  className="mt-4">Brick-laying</h5>
            <Link to="/vocationform" className="btn btn-outline-warning">Apply Here</Link>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-in"
              data-aos-duration="1000">
            <img className=" voca img-fluid" src={cap} alt="" />
            <h5  className="mt-4">capentry</h5>
            <Link to="/vocationform" className="btn btn-outline-warning">Apply Here</Link>
          </div>
          <div className="col-12 col-lg-4" data-aos="zoom-in"
              data-aos-duration="1000">
            <img className=" voca img-fluid" src={art} alt="" />
            <h5  className="mt-4">Art</h5>
            <Link to="/vocationform" className="btn btn-outline-warning">Apply Here</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Traning;
