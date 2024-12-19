import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Scroll from "./Scroll";

const Vocationalform = () => {
  return (
    <>
      <Navbar />
      <Scroll />
      <div>
        <div className="vocational-form container-fluid">
          <div className="text-center">
            <h5 className="text-light">APPLICATION FORM</h5>
          </div>
        </div>
        <div className=" details container ">
          <form
            action=""
            method=""
            className="bg-dark p-4 rounded mt-5 mb-4 text-light w-100  mx-auto shadow"
          >
            <div className="mb-3 mt-3 outline-warning">
              <label for="email" className="form-label">
                Fullname:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter fullname"
                name="fullname"
              />
            </div>
            <div className="mb-3">
              <label for="pwd" className="form-label">
                Phone number/Email:
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email/phone"
                name="phone number/email"
              />
            </div>
            <div className="mb-3">
              <label for="pwd" className="form-label">
                Address:
              </label>
              <input
                type="text"
                className="form-control"
                id="pwd"
                placeholder="Enter Address"
                name="address"
              />
              <div className="mb-3 mt-3">
              <label for="pwd" className="form-label">
                Qualification:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Qualification"
                name="qualification"
              />
              <div className="mb-3 mt-3">
              <label for="pwd" className="form-label">
                Upload Credentials:
              </label>
              <input
                type="file"
                className="form-control"
                placeholder="Enter email/phone"
                name="credentials"
              />
            </div>
            </div>
              <div className="mb-3">
                <label for="pwd" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Job title"
                  name="job"
                />
              </div>
              <textarea
                name="message"
                id=""
                placeholder="Job description"
                className="form-control mt-3"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-warning">
              Submit
            </button>
          </form>
        </div>
        <section class="map text-center mb-5">
          <iframe
            className="w-100 shadow mt-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.302984141201!2d7.486438989845312!3d9.127082590938237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104de1e42cfd50bb%3A0x7a062fb69f931c1e!2sMpape%20police%20station!5e0!3m2!1sen!2sng!4v1723849240800!5m2!1sen!2sng"
            height="350"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Vocationalform;
