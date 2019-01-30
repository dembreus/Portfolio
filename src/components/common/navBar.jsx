import React from "react";
import Links from "./links";
import { Link } from "@material-ui/core";

const navBar = () => {
  const links = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/" },
    { name: "Testimonials", href: "/" },
    { name: "Contact", href: "/" }
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          Dillon Embreus
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <Links links={links} />
        </div>
      </div>
    </nav>
  );
};

export default navBar;
