import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Scroll from "./Scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
   useEffect(() => {
              AOS.init();
            }, []);
  return (
    <>
      <Scroll />
      <div className="about container-fluid bg-black">
        <div className="container p-3 ">
          <h4 className="text-light mt-5">
            G-NOB VOCATIONAL GLOBAL CONCEPT LIMITED
          </h4>
          <hr className="text-warning" />
          <h6 className="text-light">EVERYTHING SERVICES AND MORE..</h6>
          <p className="text-light mt-3" data-aos="zoom-in" data-aos-duration="1000">
            The G-NOb Vocational Global Concept is a comprehensive approach to
            vocational guidance that emphasizes the importance of self-concept
            and individual development in career exploration and choice. It
            recognizes vocational choice as a dynamic process that evolves
            throughout an individual's life, rather than a single, static
            decision. The G-NOb model encourages individuals to understand
            themselves, their interests, and their values, and to use this
            knowledge to make informed decisions about their career paths. It
            also emphasizes the importance of aligning one's work with their
            personal values and goals, leading to greater job satisfaction and
            fulfillment.
          </p>
          <p className="text-light" data-aos="zoom-in" data-aos-duration="1000">
            G-NOB is a modern business or
            organizational approach aimed at fostering global connectivity,
            innovation, and collaboration. The concept emphasizes the
            integration of diverse cultures, technologies, and expertise across
            geographical boundaries to create solutions that are both scalable
            and adaptable in a globalized world. It often involves leveraging
            digital tools, fostering cross-border partnerships, and focusing on
            sustainability and social impact, while navigating the challenges
            posed by varying international regulations, markets, and
            socio-economic factors. G-NOB typically signifies a forward-thinking
            mindset in business and technology that prioritizes global growth
            and inclusivity.
          </p>

          <Link to="/" className="btn btn-outline-warning mt-4 mb-4">
            <i className=" fa-solid fa-circle-arrow-left"></i>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
