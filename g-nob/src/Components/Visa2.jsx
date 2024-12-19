import React from "react";
import { Link } from "react-router-dom";

const Visa = () => {
  return (
    <>
      <div className="visa container-fluid mt-5 mb-5 p-3">
        <div className="container">
          <div className="visa-button text-center">
            <div>
              <h4 className="text-light">
                Apply for our Vocational training Here
              </h4>
              <Link to="/training" className="btn btn-outline-warning text-decoration-none mt-3">
                Click Me <i class=" fa-solid fa-circle-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Visa;
