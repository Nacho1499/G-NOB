import React from "react";
import blog1 from "../assets/blog1.webp";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container-fluid mt-4 mb-5 p-3">
        <div className="container mt-5 mb-5">
          <h4>Our Recent Blog Posts</h4>
          <hr className="text-warning" />

          <div className="row g-3 mt-4">
            <div
              className="col-12 col-lg-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <a
                className="text-decoration-none text-dark"
                href="https://www.forbes.com/sites/bernardmarr/2024/10/14/the-5-most-in-demand-skills-in-2025/"
              >
                <img className="img-fluid" src={blog1} alt="" />
                <h5 className="mt-3">The 5 Most In-Demand Skills In 2025</h5>
              </a>
            </div>
            <div
              className="col-12 col-lg-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <a
                className="text-decoration-none text-dark"
                href="https://www.coursera.org/articles/high-income-skills?msockid=3877343cd5e769240bf92166d4e16884"
              >
                <img className="img-fluid" src={blog2} alt="" />
                <h5 className="mt-3">8 High-Income Skills to Learn in 2025</h5>
              </a>
            </div>
            <div
              className="col-12 col-lg-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <a
                className="text-decoration-none text-dark"
                href="https://www.sperton.com/all/top-skills-that-employers-are-looking-for-in-2025/"
              >
                <img className="img-fluid" src={blog3} alt="" />
                <h5 className="mt-3">
                  Top Skills That Employers Are Looking For in 2025
                </h5>
              </a>
            </div>
          </div>
        </div>
        <hr className="text-warning" />
      </div>
    </>
  );
};
export default Blog;
