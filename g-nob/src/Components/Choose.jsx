import React from "react";

const Choose = () => {
  return (
    <>
      <div className="choose container-fluid mt-5 mb-5">
        <div className="container">
          <h4 className="text-center">Why Choose Us</h4>
          <p className="text-center mb-3">
            A brand name you can trust and rely on
          </p>
          <hr className="text-warning mb-2" />
          <div className="row g-5 text-center mt-2">
            <div className="col-12 col-lg-4">
              <i class=" bg-warning fa-solid fa-earth-americas fa-1x mb-3 shadow p-3 rounded"></i>
              <h5 className="mb-3">24/7 Suspport</h5>
              <hr className="text-warning" />
              <p>
                G-NOB offers 24/7hours none stop service suspport to their
                clients. we always put our clients needs first above everything.
                we are not far way from your calls and messages.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <i class=" bg-warning fa-solid fa-bag-shopping fa-1x mb-3 shadow p-3 rounded"></i>
              <h5 className="mb-3">Wide variety of Options</h5>
              <hr className="text-warning" />
              <p>
                At G-NOB we offer wild varieties of avaliable options to our
                clients, we also give best oppinions on the best offers to our
                clients. we also make sure we follow up on choices made by our
                clients.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <i class=" fa-solid fa-thumbs-up fa-1x mb-3 shadow p-3 rounded bg-warning"></i>
              <h5 className="mb-3">Highly qualified services</h5>
              <hr className="text-warning" />
              <p>
                At G-NOB we provide services that consistently meet or exceed
                customer expectations, are reliable, and provide value.
                High-quality services are essential for building customer
                loyalty, enhancing brand reputation, and ensuring customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Choose;
