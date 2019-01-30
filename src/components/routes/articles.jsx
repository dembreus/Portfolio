import React from "react";

const articles = props => {
  return (
    <section id="articles" className="text-center py-5">
      {/* <!-- Container --> */}
      <div className="container">
        {/* <!-- Section heading --> */}
        <h2 className="h1-responsive font-weight-bold mb-5">Articles</h2>

        {/* <!--Grid row--> */}
        <div className="row">
          {/* <!--Grid column--> */}
          <div className="col-lg-4 col-md-12 mb-4">
            {/* <!-- Card Narrower --> */}
            <div className="card card-cascade narrower">
              {/* <!-- Card image --> */}
              <div className="view view-cascade overlay">
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                  alt="Card image cap"
                />
                <a>
                  <div className="mask rgba-white-slight" />
                </a>
              </div>

              {/* <!-- Card content --> */}
              <div className="card-body card-body-cascade">
                {/* <!-- Label --> */}
                <h5 className="pink-text pb-2 pt-1">
                  <i className="fas fa-utensils" /> Culinary
                </h5>
                {/* <!-- Title --> */}
                <h4 className="font-weight-bold card-title">
                  Cheat day inspirations
                </h4>
                {/* <!-- Text --> */}
                <p className="card-text">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
                </p>
                {/* <!-- Button --> */}
                <a className="btn btn-unique">Button</a>
              </div>
            </div>
            {/* <!-- Card Narrower --> */}
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div className="col-lg-4 col-md-6 mb-4">
            {/* <!-- Card Narrower --> */}
            <div className="card card-cascade narrower">
              {/* <!-- Card image --> */}
              <div className="view view-cascade overlay">
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                  alt="Card image cap"
                />
                <a>
                  <div className="mask rgba-white-slight" />
                </a>
              </div>

              {/* <!-- Card content --> */}
              <div className="card-body card-body-cascade">
                {/* <!-- Label --> */}
                <h5 className="pink-text pb-2 pt-1">
                  <i className="fas fa-utensils" /> Culinary
                </h5>
                {/* <!-- Title --> */}
                <h4 className="font-weight-bold card-title">
                  Cheat day inspirations
                </h4>
                {/* <!-- Text --> */}
                <p className="card-text">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
                </p>
                {/* <!-- Button --> */}
                <a className="btn btn-unique">Button</a>
              </div>
            </div>
            {/* <!-- Card Narrower --> */}
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div className="col-lg-4 col-md-6 mb-4">
            {/* <!-- Card Narrower --> */}
            <div className="card card-cascade narrower">
              {/* <!-- Card image --> */}
              <div className="view view-cascade overlay">
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                  alt="Card image cap"
                />
                <a>
                  <div className="mask rgba-white-slight" />
                </a>
              </div>

              {/* <!-- Card content --> */}
              <div className="card-body card-body-cascade">
                {/* <!-- Label --> */}
                <h5 className="pink-text pb-2 pt-1">
                  <i className="fas fa-utensils" /> Culinary
                </h5>
                {/* <!-- Title --> */}
                <h4 className="font-weight-bold card-title">
                  Cheat day inspirations
                </h4>
                {/* <!-- Text --> */}
                <p className="card-text">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
                </p>
                {/* <!-- Button --> */}
                <a className="btn btn-unique">Button</a>
              </div>
            </div>
            {/* <!-- Card Narrower --> */}
          </div>
          {/* <!--Grid column--> */}
        </div>
        {/* <!--Grid row--> */}
      </div>
      {/* <!-- Container --> */}
    </section>
  );
};

export default articles;
