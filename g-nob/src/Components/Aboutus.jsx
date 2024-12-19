import { Link } from "react-router-dom";
import logo from "../assets/about2.webp";

const Aboutus = () => {
  return (
    <>
      <section className="container-fluid p-3 mt-5 mb-5">
        <div className="container mt-5">
          <h4>About Us</h4>
          <hr className="text-warning mb-4" />
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid about-image"
                src={logo}
                alt="about logo"
              />
            </div>
            <div className="col-12 col-lg-6">
              <p>
                The G-NOb Vocational Global Concept is a comprehensive approach
                to vocational guidance that emphasizes the importance of
                self-concept and individual development in career exploration
                and choice. It recognizes vocational choice as a dynamic process
                that evolves throughout an individual's life, rather than a
                single, static decision. The G-NOb model encourages individuals
                to understand themselves, their interests, and their values, and
                to use this knowledge to make informed...
              </p>
              <Link to="/about" className="btn shadow btn-warning mt-2 ">
                More About Us <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Aboutus;
