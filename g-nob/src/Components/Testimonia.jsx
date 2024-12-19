import React from "react";

const Testimonia = () => {
  return (
    <>
      <div className="testimonia container-fluid mt-5 p-3">
        <div
          id="carouselExampleInterval"
          className="customer container-fluid carousel slide p-5 mb-5"
          data-bs-ride="carousel"
        >
          <h4 className=" mb-5 text-center text-light">
            Our Clients feedBacks
          </h4>
          <div className="carousel-inner text-center text-black bg-dark rounded   mx-auto">
            <div className="carousel-item  p-5 active" data-bs-interval="3000">
              <p className="text-light">
                "It has been an absolute pleasure collaborating with G-NOB
                Vocational Global Concept Limited. Their commitment to providing
                high-quality vocational training and development programs is
                truly remarkable.
                <p className="mt-4"> ⭐️⭐️⭐️⭐️⭐️</p>
              </p>
              <h5 className="text-light">Tochukwu</h5>
            </div>
            <div className="carousel-item  p-5" data-bs-interval="3000">
              <p className="text-light">
                The impact G-NOB Vocational Global Concept Limited has had on
                our workforce is evident in the increased productivity, enhanced
                skill sets, and greater confidence among employees who have
                completed their programs.
                <p className="mt-4"> ⭐️⭐️⭐️⭐️⭐️</p>
              </p>
              <h5 className="text-light"> Miss Adora</h5>
            </div>
            <div className="carousel-item  p-5" data-bs-interval="3000">
              <p className="text-light">
                I highly recommend G-NOB Vocational Global Concept Limited to
                any organization or individual looking to invest in sustainable,
                world-class training and development opportunities."
                <p className="mt-4"> ⭐️⭐️⭐️⭐️⭐️</p>
              </p>
              <h5 className="text-light">Mr Paul</h5>
            </div>
            <div className="carousel-item  p-5" data-bs-interval="3000">
              <p className="text-light">
                G-NOB's approach is not only focused on skill development but
                also emphasizes global standards, inclusivity, and adaptability,
                ensuring that trainees are well-prepared for diverse work
                environments across borders. Their team is incredibly
                supportive.
                <p className="mt-4"> ⭐️⭐️⭐️⭐️⭐️</p>
              </p>
              <h5 className="text-light">Miss Joy</h5>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Testimonia;
