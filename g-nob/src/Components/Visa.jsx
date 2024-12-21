import React from "react";
import visa from "../assets/visa.webp";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect } from "react";

const Visa1 = () => {
     useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
      <div className="container-fluid mt-5 mb-5 p-3">
        <div className="container">
          <div className="row g-3 mt-4 mb-4">
            <div className="col-12 col-lg-6"  data-aos="fade-right" data-aos-duration="1000">
              <img className="visa-img img-fluid" src={visa} alt="" />
            </div>
            <div className="col-12 col-lg-6"  data-aos="fade-left" data-aos-duration="1000">
              <h4 className="mb-3">Apply for your visa !!</h4>
              <hr className="text-warning" />
              <ul>
                <li>Tourist visa - for leisure travel </li>
                <li>Student visa - for studying abroad</li>
                <li>Work visa - for employment in a foreign country </li>
                <li>Business visa - for attending meetings or events</li>
                <li>
                  Immigrant Visa - for permanent residence in another country{" "}
                </li>
              </ul>

              <Link to="/contact" className="btn btn-warning shadow"><a className="text-decoration-none text-dark" href="https://wa.link/h66plk"> know more</a></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Visa1;
