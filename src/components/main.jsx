import React from "react";
import About from "./routes/about";
import Projects from "./routes/projects";
import Gallery from "./routes/gallery";
import Testimonials from "./routes/testimonials";
import CallToAction from "./routes/callToAction";
import Articles from "./routes/articles";
import Contact from "./routes/contact";

const main = () => {
  return (
    <main>
      {/* <!--Section: about--> */}
      <section className="my-5">
        <About />
      </section>
      {/* <!--Section: about--> */}
      {/* <!--Section: projects--> */}
      <section
        id="projects"
        className="text-center py-5"
        style={{ backgroundColor: "#eee" }}
      >
        <Projects />
      </section>
      {/* <!--Section: projects--> */}
      {/* <!--Section: gallery--> */}
      <Gallery />
      {/* <!--Section: gallery--> */}
      {/* <!--Section: testimonials--> */}
      <Testimonials />>{/* <!--Section: testimonials--> */}
      {/* <!--Section: call to action--> */}
      <CallToAction />
      {/* <!--Section: call to action--> */}
      {/* <!--Section: articles--> */}
      <Articles />
      {/* <!--Section: articles--> */}
      {/* <!--Section: contact--> */}
      <Contact />
      {/* <!--Section: contact--> */}
    </main>
  );
};

export default main;
