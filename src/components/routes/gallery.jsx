import React from "react";

const gallery = props => {
  return (
    <section id="gallery" className="text-center py-5">
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

        <div className="row">
          <div className="col-md-12">
            <div id="mdb-lightbox-ui" />

            <div className="mdb-lightbox">
              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(145).jpg"
                    className="img-fluid z-depth-1-half"
                  />
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(150).jpg"
                    className="img-fluid z-depth-1-half"
                  />
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(152).jpg"
                    className="img-fluid z-depth-1-half"
                  />
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(42).jpg"
                    className="img-fluid z-depth-1-half"
                  />
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(151).jpg"
                    className="img-fluid z-depth-1-half"
                  />
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(40).jpg"
                    className="img-fluid z-depth-1-half"
                  />
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg"
                    className="img-fluid z-depth-1-half"
                  />
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                    className="img-fluid z-depth-1-half"
                  />
                </a>
              </figure>

              <figure className="col-md-4">
                <a
                  href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg"
                  data-size="1600x1067"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(149).jpg"
                    className="img-fluid z-depth-1-half"
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Container --> */}
      {// MDB Lightbox Init
      function() {
        "#mdb-lightbox-ui".load("mdb-addons/mdb-lightbox-ui.html");
      }}
    </section>
  );
};

export default gallery;
