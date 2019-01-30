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
    <nav class="navbar navbar-expand-lg navbar-dark elegant-color-dark fixed-top scrolling-navbar">
      <div class="container">
        <a class="navbar-brand" href="/">
          Dillon Embreus
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <Links links={links} />
        </div>
      </div>
    </nav>
  );
};

export default navBar;
