import React from "react";
import Card from "../common/card";

const projects = props => {
  const projects = [
    {
      image: "https://mdbootstrap.com/img/Photos/Others/images/58.jpg",
      title: "Vidly",
      description: "Vidly description goes here",
      links: ["/"]
    },
    {
      image: "https://mdbootstrap.com/img/Photos/Others/project4.jpg",
      title: "Create User Profile",
      description: "Create User Profile",
      links: ["/"]
    },
    {
      image: "https://mdbootstrap.com/img/Photos/Others/images/88.jpg",
      title: "New",
      description: "New project description goes here",
      links: ["/"]
    }
  ];
  return (
    <section
      id="projects"
      className="text-center py-5"
      style={{ backgroundColor: "#eee" }}
    >
      {/* <!-- Container --> */}
      <div className="container">
        {/* <!-- Section heading --> */}
        <h2 className="h1-responsive font-weight-bold mb-5">
          My favorite projects
        </h2>
        {/* <!-- Section description --> */}
        <p className="grey-text w-responsive mx-auto mb-5">
          Some of these projects are still in development but getting better
          every iteration.
        </p>

        {/* <!-- Grid row --> */}
        <div className="row text-center">
          {projects.map(project => {
            return <Card data={project} />;
          })}
        </div>
        {/* <!-- Grid row --> */}
      </div>
      {/* <!-- Container --> */}
    </section>
  );
};

export default projects;
