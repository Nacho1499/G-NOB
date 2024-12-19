import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Scroll from "./Scroll";

const Updates = () => {
  return (
    <>
      <Scroll />
      <div className="update container-fluid bg-black p-4">
        <div className="container mt-5 mb-4">
          <h4 className="text-light">Available Updates</h4>
          <hr className="text-warning" />
          <Link to="/" className="btn btn-outline-warning mt-4">
            <i class=" fa-solid fa-circle-arrow-left"></i>
          </Link>
          <div className="mt-4 text-light bg-warning p-3 rounded shadow text-black">
            <h6 className="mb-3">Welcome mesage</h6>
            <p>
              Welcome Message from G-NOB Vocational Global Concept Limited
              Welcome to G-NOB Vocational Global Concept Limited! We are
              delighted to have you with us as we embark on a journey toward
              personal and professional growth. At G-NOB, we are committed to
              empowering individuals and organizations with world-class
              vocational training programs that are designed to meet the needs
              of today’s fast-evolving global job market. Whether you are
              looking to upskill, expand your knowledge, or enhance your career
              prospects, we are here to guide you every step of the way.
            </p>
          </div>
          <div className="mt-4 text-light bg-warning p-3 rounded shadow text-black">
            <h6 className="mb-3">Regular Updates</h6>
            <p>
              Regular Update from G-NOB Vocational Global Concept Limited At
              G-NOB Vocational Global Concept Limited, we are dedicated to
              keeping you informed and up-to-date with the latest developments,
              training programs, and industry insights.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Updates;
