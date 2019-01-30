import React, { Fragment } from "react";

const about = props => {
  return (
    <Fragment>
      {" "}
      {/* <!-- Section heading --> */}
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Why choose me?
      </h2>
      {/* <!-- Section description --> */}
      <p className="lead grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      {/* <!-- Grid row --> */}
      <div className="row">
        {/* <!-- Grid column --> */}
        <div className="col-lg-5 text-center text-lg-left">
          <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
            alt="Sample image"
          />
          >
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-lg-7">
          {/* <!-- Grid row --> */}
          <div className="row mb-3">
            {/* <!-- Grid column --> */}
            <div className="col-1">
              <i className="fas fa-share fa-lg indigo-text" />
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-xl-10 col-md-11 col-10">
              <h5 className="font-weight-bold mb-3">Safety</h5>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad
                minima veniam, quis nostrum exercitationem ullam. Reprehenderit
                maiores aperiam assumenda deleniti hic.
              </p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}

          {/* <!-- Grid row --> */}
          <div className="row mb-3">
            {/* <!-- Grid column --> */}
            <div className="col-1">
              <i className="fas fa-share fa-lg indigo-text" />
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-xl-10 col-md-11 col-10">
              <h5 className="font-weight-bold mb-3">Technology</h5>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad
                minima veniam, quis nostrum exercitationem ullam. Reprehenderit
                maiores aperiam assumenda deleniti hic.
              </p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}

          {/* <!--Grid row--> */}
          <div className="row">
            {/* <!-- Grid column --> */}
            <div className="col-1">
              <i className="fas fa-share fa-lg indigo-text" />
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-xl-10 col-md-11 col-10">
              <h5 className="font-weight-bold mb-3">Finance</h5>
              <p className="grey-text mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad
                minima veniam, quis nostrum exercitationem ullam. Reprehenderit
                maiores aperiam assumenda deleniti hic.
              </p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!--Grid column--> */}
      </div>
      {/* <!-- Grid row --> */}
    </Fragment>
  );
};

export default about;
