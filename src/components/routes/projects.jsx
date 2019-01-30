import React, { Fragment } from "react";

const projects = props => {
  return (
    <Fragment>
      {" "}
      {/* <!-- Container --> */}
      <div className="container">
        {/* <!-- Section heading --> */}
        <h2 className="h1-responsive font-weight-bold mb-5">
          Our best projects
        </h2>
        {/* <!-- Section description --> */}
        <p className="grey-text w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit est laborum.
        </p>

        {/* <!-- Grid row --> */}
        <div className="row text-center">
          {/* <!-- Grid column --> */}
          <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
            {/* <!--Featured image--> */}
            <div className="view overlay rounded z-depth-1">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
                className="img-fluid"
                alt="Sample project image"
              />
              <a>
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* <!--Excerpt--> */}
            <div className="card-body pb-0">
              <h4 className="font-weight-bold my-3">Title of the news</h4>
              <p className="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
              <a className="btn btn-purple btn-sm">
                <i className="fas fa-clone left" /> View project
              </a>
            </div>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
            {/* <!--Featured image--> */}
            <div className="view overlay rounded z-depth-1">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
                className="img-fluid"
                alt="Sample project image"
              />{" "}
              <a>
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* <!--Excerpt--> */}
            <div className="card-body pb-0">
              <h4 className="font-weight-bold my-3">Title of the news</h4>
              <p className="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
              <a className="btn btn-purple btn-sm">
                <i className="fas fa-clone left" /> View project
              </a>
            </div>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-lg-4 col-md-6">
            {/* <!--Featured image--> */}
            <div className="view overlay rounded z-depth-1">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"
                className="img-fluid"
                alt="Sample project image"
              />
              <a>
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* <!--Excerpt--> */}
            <div className="card-body pb-0">
              <h4 className="font-weight-bold my-3">Title of the news</h4>
              <p className="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
              <a className="btn btn-purple btn-sm">
                <i className="fas fa-clone left" /> View project
              </a>
            </div>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}
      </div>
      {/* <!-- Container --> */}
    </Fragment>
  );
};

export default projects;
