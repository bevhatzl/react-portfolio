import React from "react";

// About Me
function About() {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <br />
        <br />
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto">
            <p className="lead" id="strongFont">
              I have completed the ​Full Stack Coding Boot Camp at University of
              Sydney and I enjoy both Back End or Front End Web.​ I first
              started a passion for programming while studying for my Bachelor
              of Business in the past. Now most recently I have started self
              study to learn Web Development with the aim to become a full stack
              engineer.
            </p>
          </div>
          <div className="col-lg-4 mr-auto">
            <p className="lead" id="strongFont">
              Since completing my formal studies I am starting more projects to
              be completed in my own time. I am proficient with HTML, CSS,
              JavaScript, jQuery, Bootstrap, Git, Node, Express.js, SQL,
              MongoDB, ORMs, ODMs and React. This portfolio was built using
              React! Check out my projects in the Portfolio and feel free to get
              in touch with me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
