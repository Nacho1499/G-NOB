import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className=" services container mt-4  p-3 mb-5">
        <h4>Our Services</h4>
        <hr className="text-warning" />
        <div className="row g-3 mt-3 text-center">
          <div
            className="col-12 col-lg-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="service1 p-3 ">
              <div className="">
                <i class="fa-solid fa-plane-departure fa-2x text-warning mb-3"></i>
                <hr className="text-warning" />
                <h4 className="text-light">Flight Booking / Visa</h4>

                <p className="text-light mt-4">
                  Booking a flight can be an overwhelming task, especially with
                  the multitude of options available. However, with the right
                  approach, you can streamline the process and find the best
                  deals tailored to your travel needs.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="service2 p-3 ">
              <div className="">
                <i class="fa-solid fa-car fa-2x text-warning mb-3"></i>
                <hr className="text-warning" />
                <h4 className="text-light">
                  Internship / Apprentiship Programs
                </h4>
                <p className="text-light mt-4">
                  There’s no better way to learn a job than with hands-on
                  experience. Internships and apprenticeships both offer
                  valuable learning opportunities for new employees, but they
                  serve different purposes.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-lg-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="service3 p-3 ">
              <div className="">
                <i class="fa-solid fa-hotel text-warning fa-2x mb-3"></i>
                <hr className="text-warning" />

                <h4 className="text-light">Recruitment programs</h4>
                <p className="text-light mt-4 ">
                  Effective recruitment is important because it allows
                  organizations to hire candidates that are well-qualified for
                  available positions, increasing the chances they will succeed
                  in the role
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
