import React from "react";

const Client = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="container-fluid p-5 mb-5 bg-dark text-secondary">
        <div className="container">
          <h1 className="display-1 text-secondary text-center mb-0">
            Testimonial
          </h1>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container-fluid p-0 py-5">
        <div className="row g-0">
          {/* Left Image Section */}
          <div
            className="col-lg-6"
            data-wow-delay="0.1s"
            style={{ minHeight: "500px" }}
          >
            <div
              className="h-100 position-relative overflow-hidden"
              style={{ borderTopLeftRadius: "50%" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/testimonial.jpg"
                alt="Testimonial"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div
            className="col-lg-6 bg-dark p-5 overflow-hidden"
            data-wow-delay="0.3s"
            style={{ borderBottomRightRadius: "50%" }}
          >
            <div className="mb-5">
              <h5 className="section-title">Testimonial</h5>
              <h1 className="display-3 text-secondary mb-0">Our Clients Say</h1>
            </div>

            {/* Testimonial Items */}
            <div className="owl-carousel testimonial-carousel">
              {/* Testimonial Item 1 */}
              <div className="testimonial-item">
                <p className="fs-4 fw-normal text-light mb-4">
                  <i className="fa fa-quote-left text-primary me-3"></i>
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd
                  labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                  et labore et tempor diam tempor erat dolor rebum sit ipsum.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid rounded-circle"
                    src="img/testimonial-1.jpg"
                    alt="Client"
                  />
                  <div className="ps-4">
                    <h5 className="text-secondary">Client Name</h5>
                    <span
                      className="small text-uppercase text-secondary"
                      style={{ letterSpacing: "3px" }}
                    >
                      Profession
                    </span>
                  </div>
                </div>
              </div>

              {/* Testimonial Item 2 */}
              <div className="testimonial-item">
                <p className="fs-4 fw-normal text-light mb-4">
                  <i className="fa fa-quote-left text-primary me-3"></i>
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd
                  labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                  et labore et tempor diam tempor erat dolor rebum sit ipsum.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid rounded-circle"
                    src="img/testimonial-2.jpg"
                    alt="Client"
                  />
                  <div className="ps-4">
                    <h5 className="text-secondary">Client Name</h5>
                    <span
                      className="small text-uppercase text-secondary"
                      style={{ letterSpacing: "3px" }}
                    >
                      Profession
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Testimonials */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
