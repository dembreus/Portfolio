import React from "react";

const footer = props => {
  return (
    <footer className="page-footer font-small pt-4">
      <div className="container">
        {/* <!-- Social buttons --> */}
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a className="btn-floating btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-gplus mx-1">
              <i className="fab fa-google-plus-g"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
        {/* <!-- Social buttons --> */}
      </div>
      {/* <!-- Footer Elements --> */}

      {/* <!-- Copyright --> */}
      <div className="footer-copyright text-center py-3">
        © 2018 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/">
          {" "}
          MDBootstrap.com
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};

export default footer;
