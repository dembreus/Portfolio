import React from "react";

const contact = props => {
  return (
    <section id="contact" className="py-5" style={{ backgroundColor: "#eee" }}>
      <div className="container">
        {/* <!-- Section heading --> */}
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          Contact us
        </h2>
        {/* <!-- Section description --> */}
        <p className="text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>

        {/* <!-- Grid row --> */}
        <div className="row">
          {/* <!-- Grid column --> */}
          <div className="col-md-9 mb-md-0 mb-5">
            <form>
              {/* <!-- Grid row --> */}
              <div className="row">
                {/* <!-- Grid column --> */}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="contact-name"
                      className="form-control"
                    />
                    >
                    <label for="contact-name" className="">
                      Your name
                    </label>
                  </div>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="contact-email"
                      className="form-control"
                    />
                    >
                    <label for="contact-email" className="">
                      Your email
                    </label>
                  </div>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}

              {/* <!-- Grid row --> */}
              <div className="row">
                {/* <!-- Grid column --> */}
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="contact-Subject"
                      className="form-control"
                    />
                    >
                    <label for="contact-Subject" className="">
                      Subject
                    </label>
                  </div>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}

              {/* <!-- Grid row --> */}
              <div className="row">
                {/* <!-- Grid column --> */}
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="contact-message"
                      className="form-control md-textarea"
                      rows="3"
                    />
                    <label for="contact-message">Your message</label>
                  </div>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </form>

            <div className="text-center text-md-left">
              <a className="btn btn-purple btn-md">Send</a>
            </div>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x purple-text" />
                <p>San Francisco, CA 94126, USA</p>
              </li>
              <li>
                <i className="fas fa-phone fa-2x mt-4 purple-text" />
                <p>+ 01 234 567 89</p>
              </li>
              <li>
                <i className="fas fa-envelope fa-2x mt-4 purple-text" />
                <p className="mb-0">contact@example.com</p>
              </li>
            </ul>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}
      </div>
    </section>
  );
};

export default contact;
