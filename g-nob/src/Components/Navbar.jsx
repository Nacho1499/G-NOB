import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark p-2 fixed-top shadow">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h4 className="text-light">
              G -<span className="text-warning"> NOB</span>
            </h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-light">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-light">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-light">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/training" className="nav-link text-light">
                  Vocational Center
                </Link>
              </li>
            </ul>

            <Link to="/updates" className="btn btn-outline-warning p-2">
              Updates
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
