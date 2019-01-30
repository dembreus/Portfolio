import React from "react";

const links = ({ links }) => {
  return (
    <ul class="navbar-nav mr-auto smooth-scroll">
      {links.map(link => {
        return (
          <li class="nav-item">
            <a class="nav-link" href={link.href} data-offset="90">
              {link.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default links;
