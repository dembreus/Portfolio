import React from "react";
import "../../styles/routes/callToAction.css";

const callToAction = props => {
  return (
    <div
      className="streak callToAction streak-md streak-photo"
      //   style={{
      //     backgroundImage: url()
      //   }}
    >
      <div className="flex-center rgba-black-light pattern-1">
        <div className="white-text smooth-scroll mx-4">
          <h2 className="h2-responsive mb-5 wow fadeIn">
            If you have any legal problem in your life ... We are available
          </h2>
          <div className="text-center">
            <a
              href="#contact"
              className="btn btn-outline-white wow fadeIn "
              data-offset="100"
              data-wow-delay="0.2s"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default callToAction;
