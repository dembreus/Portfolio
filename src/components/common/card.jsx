import React from "react";

const card = ({ data }) => {
  return (
    <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
      {/* <!--Featured image--> */}
      <div className="view overlay rounded z-depth-1">
        <img
          src={data.image}
          className="img-fluid"
          alt="Sample project image"
        />
        <a>
          <div className="mask rgba-white-slight" />
        </a>
      </div>
      {/* <!--Excerpt--> */}
      <div className="card-body pb-0">
        <h4 className="font-weight-bold my-3">{data.title}</h4>
        <p className="grey-text">{data.description}</p>
        <a className="btn btn-default btn-sm" href={data.links[0]}>
          <i className="fas fa-clone left" /> View project
        </a>
      </div>
    </div>
  );
};

export default card;
