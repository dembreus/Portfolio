import React from "react";

const contact = props => {
  return (
    <section id="contact" className="py-5" style={{ backgroundColor: "#eee" }}>
      <div className="container">
        {/* <!-- Section heading --> */}
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          Contact Me
        </h2>
        {/* <!-- Section description --> */}
        <p className="text-center w-responsive mx-auto mb-5">
          The best way to contact me is via phone call, but you may text or
          email as well. If I do not answer don't be afaid to leave a voice
          mail. The best hours to contact me via phone is Monday - Friday, 10:00
          am - 4:00 pm Mountain Time.
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
                      placeholder="Your name"
                    />

                    <label for="contact-name" className="" />
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
                      placeholder="Your email"
                    />

                    <label for="contact-email" className="" />
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
                      placeholder="Subject"
                    />

                    <label for="contact-Subject" className="" />
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
                      placeholder="Your message"
                      rows="3"
                    />
                    <label for="contact-message" />
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
                <p>Millcreek, UT 84124, USA</p>
              </li>
              <li>
                <i className="fas fa-phone fa-2x mt-4 purple-text" />
                <p>+ 01 385 444 6272</p>
              </li>
              <li>
                <i className="fas fa-envelope fa-2x mt-4 purple-text" />
                <p className="mb-0">dillon.embreus@gmail.com</p>
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
