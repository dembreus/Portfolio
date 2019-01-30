import React from "react";
import NavBar from "./common/navBar";
import "../styles/header.css";

const header = () => {
  return (
    <header>
      <NavBar />
      {/* <!-- Full Page Intro --> */}
      <div id="intro-section" className="view">
        <video
          className="video-intro"
          poster="https://mdbootstrap.com/img/Photos/Others/background.jpg"
          playsinline
          autoplay
          muted
          loop
        >
          <source
            src="https://mdbootstrap.com/img/video/animation.mp4"
            type="video/mp4"
          />
        </video>

        {/* <!-- Mask & flexbox options--> */}
        <div className="mask rgba-gradient d-flex justify-content-center align-items-center">
          {/* <!-- Content --> */}
          <div className="container px-md-3 px-sm-0">
            {/* <!--Grid row--> */}
            <div className="row wow fadeIn">
              {/* <!--Grid column--> */}
              <div className="col-md-12 mb-4 white-text text-center wow fadeIn">
                <h3 className="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">
                  Creative Agency
                </h3>
                <hr className="hr-light my-4 w-75" />
                <h4 className="subtext-header mt-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  deleniti consequuntur nihil.
                </h4>
                <a href="#!" className="btn btn-rounded btn-outline-white">
                  <i className="fas fa-home" /> Visit us
                </a>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </div>
          {/* <!-- Content --> */}
        </div>
        {/* <!-- Mask & flexbox options--> */}
      </div>
      {/* <!-- Full Page Intro --> */}
    </header>
  );
};

export default header;
