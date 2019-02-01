import React from "react";
import NavBar from "./common/navBar";
import "../styles/header.css";

const header = () => {
  return (
    <header>
      {/* <NavBar /> */}
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
                <h1 className="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">
                  Dillon Embreus
                </h1>
                <hr className="hr-light my-4 w-75" />
                <h4 className="subtext-header mt-2 mb-4">
                  Full Stack Web Developer
                </h4>
                <a
                  href="#projects"
                  className="btn btn-rounded btn-outline-white"
                >
                  <i className="fas fa-home" /> View projects
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
